const moment = require("moment");
const { isEmpty, meanBy } = require("lodash");
const { DATE_TIME_FORMAT } = require("../_constants");

module.exports = ({ strapi }) => ({
  async getDiscussions(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;

      // RFIs Stats
      let rfisFilters = [
        {
          $or: [
            {
              answer: {
                $ne: "",
              },
            },
            {
              once_answered: true,
            },
          ],
        },
      ];

      if (Number(project_id) > -1) {
        rfisFilters.push({
          project: Number(project_id),
        });
      }

      if (start_date !== null && end_date !== null) {
        rfisFilters.push({
          createdAt: {
            $gte: moment(start_date).format(DATE_TIME_FORMAT),
            $lte: moment(end_date).format(DATE_TIME_FORMAT),
          },
        });
      }

      const rfisCount = await strapi.db.query("api::rfi.rfi").count({
        where: {
          $and: rfisFilters,
        },
      });

      // Discussions Stats
      let discussionsFilters = [
        {
          is_read: false,
        },
      ];

      if (Number(project_id) > -1) {
        discussionsFilters.push({
          conversation: {
            project_id: Number(project_id),
          },
        });
      }

      if (start_date !== null && end_date !== null) {
        discussionsFilters.push({
          createdAt: {
            $gte: moment(start_date).format(DATE_TIME_FORMAT),
            $lte: moment(end_date).format(DATE_TIME_FORMAT),
          },
        });
      }

      const discussionsCount = await strapi.db
        .query("api::chat-message.chat-message")
        .count({
          where: {
            $and: discussionsFilters,
          },
        });

      return (ctx.body = {
        success: true,
        data: [
          {
            name: "Unanswered RFI",
            value: rfisCount,
          },
          {
            name: "Unanswered Discussions",
            value: discussionsCount,
          },
        ],
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getCostPerformance(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;
      let actualCost = 0;
      let estimatedCost = 0;
      let filters = {
        is_deleted: false,
        status: {
          $in: ["Active"],
        },
      };

      if (+project_id !== -1) {
        filters["id"] = +project_id;
      }

      const projects = await strapi.db.query(`api::project.project`).findMany({
        populate: true,
        where: filters,
      });

      projects?.forEach((project) => {
        estimatedCost += project?.estimated_budget;
        actualCost += project?.sanctioned_budget;
      });

      let data = [
        {
          type: "Actual Cost",
          value: actualCost,
        },
        {
          type: "Estimated Cost",
          value: estimatedCost,
        },
      ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async calcSingleProjectPerformance(projectId) {
    try {
      const project = await strapi.db.query("api::project.project").findOne({
        where: {
          id: projectId,
          status: "Active",
        },
      });

      if (isEmpty(project)) {
        throw new Error();
      }

      const estimatedBudget = project?.estimated_budget || 0;
      const actualBudget = project?.sanctioned_budget || 0;

      const tasks = await strapi.db.query("api::task.task").findMany({
        where: {
          project: projectId,
          type: "Task",
        },
      });

      if (tasks?.length === 0) {
        throw new Error();
      }

      const totalTasks = tasks?.length;
      const completedTasks = tasks?.filter(
        (item) => item?.status === "Completed",
      )?.length;
      const plannedCompletedTasks = tasks?.filter((item) => {
        return moment(item?.end_date).valueOf() <= moment().valueOf();
      })?.length;

      let ac = actualBudget;
      let ev = 0;
      let pv = 0;
      let cpi = 0;
      let spi = 0;

      if (totalTasks > 0) {
        ev = (completedTasks / totalTasks) * estimatedBudget;
        pv = (plannedCompletedTasks / totalTasks) * estimatedBudget;
      }

      if (ac > 0) {
        cpi = ev / ac;
      }

      if (pv > 0) {
        spi = ev / pv;
      }

      return {
        ac,
        ev: ev?.toFixed(2),
        pv: pv?.toFixed(2),
        cpi: cpi?.toFixed(2),
        spi: spi?.toFixed(2),
      };
    } catch (error) {
      return null;
    }
  },
  async calcAllProjectPerformance() {
    try {
      const projects = await strapi.db.query("api::project.project").findMany({
        where: {
          status: "Active",
        },
      });

      if (projects?.length === 0) {
        throw new Error();
      }

      const promises = projects?.map(async (project) => {
        try {
          const stats = await this.calcSingleProjectPerformance(project?.id);

          return stats;
        } catch (error) {
          return null;
        }
      });

      let results = await Promise.allSettled(promises);

      results = results
        ?.filter(
          (result) => result.status === "fulfilled" && result.value !== null,
        )
        .map((result) => result.value);

      let values = [];

      results?.forEach((value) => {
        values.push({
          ac: Number(value?.ac),
          ev: Number(value?.ev),
          pv: Number(value?.pv),
          cpi: Number(value?.cpi),
          spi: Number(value?.spi),
        });
      });

      return {
        ac: meanBy(values, "ac"),
        ev: meanBy(values, "ev").toFixed(2),
        pv: meanBy(values, "pv").toFixed(2),
        cpi: meanBy(values, "cpi").toFixed(2),
        spi: meanBy(values, "spi").toFixed(2),
      };
    } catch (error) {
      return null;
    }
  },
  async getProjectPerformance(ctx) {
    try {
      const { project_id = -1 } = ctx?.request?.query;

      let data = null;

      if (Number(project_id) === -1) {
        data = await this.calcAllProjectPerformance();
      } else {
        data = await this.calcSingleProjectPerformance(Number(project_id));
      }

      return (ctx.body = {
        success: true,
        data: [
          {
            name: "SPI (Schedule Performance Index)",
            value: data?.spi || 0,
          },
          {
            name: "CPI (Cost Perfromance Index)",
            value: data?.cpi || 0,
          },
          {
            name: "Planned Value (PV)",
            value: data?.pv || 0,
          },
          {
            name: "Earned Value (EV)",
            value: data?.ev || 0,
          },
        ],
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getPerformanceReviews(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;
      let total = 0;
      let complete = 0;
      let incomplete = 0;

      // TODO: Filter by project_id

      const dailyReports = await strapi.db
        .query(`api::daily-report.daily-report`)
        .findMany({
          populate: true,
          where: {
            is_deleted: false,
            createdAt: {
              $gte: moment()?.startOf("day")?.format(DATE_TIME_FORMAT),
            },
          },
        });

      if (dailyReports?.length > 0) {
        dailyReports?.forEach((dailyReport) => {
          total += 1;

          dailyReport?.tasks?.forEach((task) => {
            if (task?.completed === true) {
              complete += 1;
            } else {
              incomplete += 1;
            }
          });
        });
      }

      const data = [
        {
          type: "Complete",
          value: Math.round((complete / total) * 100) || 0,
        },
        {
          type: "Incomplete",
          value: Math.round((incomplete / total) * 100) || 0,
        },
      ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getProjectsHealth(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;
      let data = [];
      let estimatedDuration = 0;
      let actualDuration = 0;

      let filters = {
        is_deleted: false,
        status: {
          $in: ["Active"],
        },
      };

      if (+project_id !== -1) {
        filters["id"] = +project_id;
      }

      let projects = await strapi.db.query(`api::project.project`).findMany({
        where: filters,
      });

      projects.forEach((project) => {
        estimatedDuration =
          Math.max(
            0,
            moment(project?.end_date).diff(moment(project?.start_date), "days"),
          ) || 0;

        actualDuration =
          Math.max(
            0,
            moment(project?.actual_end_date).diff(
              moment(project?.actual_start_date),
              "days",
            ),
          ) || 0;

        data.push({
          project: project?.name,
          category: "Cost Escalation",
          value:
            Math.max(
              0,
              project?.sanctioned_budget - project?.estimated_budget,
            ) || 0,
        });

        data.push({
          project: project?.name,
          category: "Delay",
          value: Math.max(0, actualDuration - estimatedDuration) || 0,
        });
      });

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getPhaseCompletion(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;
      let milestoneStats = {
        Pending: 0,
        Active: 0,
        Completed: 0,
        "On Hold": 0,
      };
      let taskStats = {
        Pending: 0,
        Active: 0,
        Completed: 0,
        "On Hold": 0,
      };
      let filters = {
        is_deleted: false,
      };

      if (+project_id !== -1) {
        filters["project"] = {
          id: +project_id,
        };
      }

      const tasks = await strapi.db.query(`api::task.task`).findMany({
        populate: true,
        where: filters,
      });

      tasks?.forEach((taskItem) => {
        if (taskItem?.type === "Milestone") {
          milestoneStats[taskItem?.status] += 1;

          // tasks
          //   ?.filter(
          //     (item) => item?.parent === taskItem?.id && item?.type === "Task"
          //   )
          //   ?.forEach((item) => {
          //     taskStats[item?.status] += 1;
          //   });
        } else {
          taskStats[taskItem?.status] += 1;
        }
      });

      const data = [
        {
          data: Object.keys(milestoneStats)?.map((key) => ({
            type: key,
            value: milestoneStats[key],
          })),
        },
        {
          data: Object.keys(taskStats)?.map((key) => ({
            type: key,
            value: taskStats[key],
          })),
        },
      ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getTimelineAndResources(ctx) {
    const {
      project_id = -1,
      start_date = null,
      end_date = null,
    } = ctx?.request?.query;
    let data = [];

    try {
      let filters = {
        is_deleted: false,
        status: {
          $in: ["Active"],
        },
      };

      if (+project_id !== -1) {
        filters["id"] = +project_id;
      }

      const projects = await strapi.db.query(`api::project.project`).findMany({
        populate: true,
        where: filters,
      });
      const taskMaterials = await strapi.db
        .query(`api::task-material.task-material`)
        .findMany({
          populate: ["task.project"],
          where: {
            is_deleted: false,
          },
        });
      const taskManpowers = await strapi.db
        .query(`api::task-manpower.task-manpower`)
        .findMany({
          populate: ["task.project"],
          where: {
            is_deleted: false,
          },
        });
      const taskMachines = await strapi.db
        .query(`api::task-machine.task-machine`)
        .findMany({
          populate: ["task.project"],
          where: {
            is_deleted: false,
          },
        });
      const taskHandTools = await strapi.db
        .query(`api::task-hand-tool.task-hand-tool`)
        .findMany({
          populate: ["task.project"],
          where: {
            is_deleted: false,
          },
        });

      projects.forEach((project) => {
        data?.push({
          name: "Days",
          value:
            moment(project?.end_date).diff(
              moment(project?.start_date),
              "days",
            ) || 0,
          project_name: project?.name,
        });

        let resourcesCount = 0;

        resourcesCount += taskMaterials?.filter(
          (item) => item?.task?.project?.id === project?.id,
        )?.length;

        resourcesCount += taskMachines?.filter(
          (item) => item?.task?.project?.id === project?.id,
        )?.length;

        resourcesCount += taskHandTools?.filter(
          (item) => item?.task?.project?.id === project?.id,
        )?.length;

        resourcesCount += taskManpowers?.filter(
          (item) => item?.task?.project?.id === project?.id,
        )?.length;

        data?.push({
          name: "Resources",
          value: resourcesCount,
          project_name: project?.name,
        });
      });

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
});
