const moment = require("moment");
const _ = require("lodash");

module.exports = ({ strapi }) => ({
  async getTaskStatuses(projectId) {
    return {
      in_progress: 0,
      late: 0,
      completed: 0,
      not_started: 0,
    };
  },
  async getTaskHandTools({ projectId, tasks }) {
    let results = [];

    const taskHandTools = await strapi.db
      .query("api::task-hand-tool.task-hand-tool")
      .findMany({
        where: {
          task: {
            project: projectId,
          },
          is_deleted: false,
        },
        populate: true,
      });

    if (tasks?.length > 0) {
      tasks.forEach((task) => {
        results.push({
          task_no: task?.no,
          task_name: task?.name,
          data: taskHandTools
            ?.filter((item) => item?.task?.id === task?.id)
            ?.map((item) => ({
              hand_tool_no: item?.hand_tool?.no,
              name: item?.hand_tool?.name,
              quantity: item?.quantity,
            })),
        });
      });
    }

    return results;
  },
  async getTaskMachines({ projectId, tasks }) {
    let results = [];

    const taskMachines = await strapi.db
      .query("api::task-machine.task-machine")
      .findMany({
        where: {
          task: {
            project: projectId,
          },
          is_deleted: false,
        },
        populate: true,
      });

    if (tasks?.length > 0) {
      tasks.forEach((task) => {
        results.push({
          task_no: task?.no,
          task_name: task?.name,
          data: taskMachines
            ?.filter((item) => item?.task?.id === task?.id)
            ?.map((item) => ({
              machine_no: item?.machine?.no,
              name: item?.machine?.name,
              quantity: item?.quantity,
            })),
        });
      });
    }

    return results;
  },
  async getTaskDocuments({ projectId, tasks }) {
    let results = [];

    const taskDocuments = await strapi.db
      .query("api::task-document.task-document")
      .findMany({
        where: {
          task: {
            project: projectId,
          },
          is_deleted: false,
        },
        populate: true,
      });

    if (tasks?.length > 0) {
      tasks.forEach((task) => {
        results.push({
          task_no: task?.no,
          task_name: task?.name,
          data: taskDocuments
            ?.filter((item) => item?.task?.id === task?.id)
            ?.map((item) => ({
              document_no: item?.document?.no,
              name: item?.machine?.name,
              url: `https://demo.quickso.in/downloads/task-documents/${item?.document?.no}`,
            })),
        });
      });
    }

    return results;
  },
  async getUpcomingTasks({ tasks }) {
    let results = [];
    let filteredTasks = tasks
      ?.filter(
        (item) => moment(item?.start_date)?.valueOf() > moment()?.valueOf()
      )
      ?.map((item) => ({
        ...item,
        date_for_group: moment(item?.start_date)?.format("DD-MM-YYYY"),
      }));
    let groupedData = _.groupBy(filteredTasks, "date_for_group");

    if (Object.keys(groupedData)?.length > 0) {
      Object.keys(groupedData)?.forEach((key) => {
        results.push({
          date: key,
          data: groupedData?.[key]?.map((item) => ({
            task_no: item?.no,
            task_name: item?.name,
            start_date: moment(item?.start_date)?.format("DD-MM-YYYY"),
            end_date: moment(item?.end_date)?.format("DD-MM-YYYY"),
            remarks: item?.description,
          })),
        });
      });
    }

    return results;
  },
  async getIssues({ tasks }) {
    // let results = [];

    // return results;

    return [
      {
        date: "01-12-2022",
        data: [
          {
            task_no: "TASK-01",
            issue: "Missing requirements",
            risk: "Risk for executing tasks",
            mitigation: "Need a meeting for further discussion",
            notes: "Urgent",
          },
        ],
      },
      {
        date: "02-12-2022",
        data: [
          {
            task_no: "TASK-02",
            issue: "Missing requirements",
            risk: "Risk for executing tasks",
            mitigation: "Need a meeting for further discussion",
            notes: "Urgent",
          },
        ],
      },
    ];
  },
  async getLabourAttendance() {
    return [];

    return [
      {
        date: "01-12-2022",
        data: [
          {
            manpower_type: "Carpenter",
            workers: 6,
            hours: 24,
          },
        ],
      },
      {
        date: "02-12-2022",
        data: [
          {
            manpower_type: "Painter",
            workers: 10,
            hours: 32,
          },
          {
            manpower_type: "Builder",
            workers: 16,
            hours: 48,
          },
        ],
      },
    ];
  },
  async getInventory() {
    let results = [];

    const stockLedgers = await strapi.db
      .query("api::stock-ledger.stock-ledger")
      .findMany({
        where: {
          is_deleted: false,
        },
        populate: true,
      });

    if (stockLedgers?.length > 0) {
      stockLedgers.forEach((item) => {
        results.push({
          material_name: item?.material_item?.name,
          material_unit: item?.material_unit?.name,
          in_stock: item?.quantity,
        });
      });
    }

    return [
      {
        date: moment().format("DD-MM-YYYY"),
        data: results,
      },
    ];
  },
  async getRequestedMaterials({ projectId }) {
    let results = [];

    const vendorMaterialRequisitions = await strapi.db
      .query("api::vendor-material-requisition.vendor-material-requisition")
      .findMany({
        where: {
          project: projectId,
          is_deleted: false,
        },
      });

    if (vendorMaterialRequisitions?.length > 0) {
      vendorMaterialRequisitions.forEach((item) => {
        results.push({
          date: moment(item?.createdAt)?.format("DD-MM-YYYY"),
          data: item?.materials.map((material) => ({
            quantity: material?.quantity,
            delivery_date: moment(item?.expected_delivery_date)?.format(
              "DD-MM-YYYY"
            ),
            material_name: material?.material_item,
            material_unit: material?.material_unit,
          })),
        });
      });
    }

    return results;
  },
  async getOverallSiteActivities({ projectId }) {
    return {
      tasks_updated: 0,
      issues: 0,
      attendance_logs: 0,
    };
  },
  async getAllUpdates({ tasks }) {
    let results = [];
    let dailyReports = await strapi.db
      .query("api::daily-report.daily-report")
      .findMany({
        where: {
          is_deleted: false,
        },
      });

    dailyReports = dailyReports.map((item) => ({
      ...item,
      date_for_group: moment(item?.date).format("DD-MM-YYYY"),
    }));

    const groupedData = _.groupBy(dailyReports, "date_for_group");

    if (Object.keys(groupedData).length > 0) {
      Object.keys(groupedData)?.forEach((key) => {
        const dailyData = groupedData?.[key]
          ?.filter((item) => {
            return tasks.some((task) => task?.id === item?.id);
          })
          ?.map((item) => {
            const task = tasks.find((task) => task?.id === item?.id);

            return {
              task_no: task?.no,
              task_name: task?.name,
              start_date: task?.start_date,
              end_date: task?.end_date,
              completion_progress: item?.completion_percentage,
              remarks: item?.notes,
            };
          });

        if (dailyData?.length > 0) {
          results.push({
            date: key,
            data: dailyData,
          });
        }
      });
    }

    return results;

    // return [
    //   {
    //     date: "01-12-2022",
    //     data: [
    //       {
    //         task_no: "TASK-01",
    //         task_name: "Work with the floor of the building",
    //         start_date: "01 Dec, 2022",
    //         end_date: "30 Dev, 2022",
    //         completion_progress: 50,
    //         total_workers: 10,
    //         remarks: "Some remarks of the task will be noted here.",
    //       },
    //     ],
    //   },
    //   {
    //     date: "02-12-2022",
    //     data: [
    //       {
    //         task_no: "TASK-02",
    //         task_name: "Work with the ceil of the building",
    //         start_date: "01 Dec, 2022",
    //         end_date: "30 Dev, 2022",
    //         completion_progress: 50,
    //         total_workers: 10,
    //         remarks: "Some remarks of the task will be noted here.",
    //       },
    //       {
    //         task_no: "TASK-03",
    //         task_name: "Work with the wall of the building",
    //         start_date: "01 Dec, 2022",
    //         end_date: "30 Dev, 2022",
    //         completion_progress: 50,
    //         total_workers: 10,
    //         remarks: "Some remarks of the task will be noted here.",
    //       },
    //     ],
    //   },
    // ];
  },
  async getReportData(ctx) {
    try {
      const { projectId } = ctx?.request?.params;
      const project = await strapi.db.query("api::project.project").findOne({
        where: {
          id: +projectId,
          is_deleted: false,
        },
      });
      const tasks = await strapi.db.query("api::task.task").findMany({
        where: {
          project: +projectId,
          is_deleted: false,
        },
      });
      const taskStatuses = await this.getTaskStatuses(+projectId);
      const taskHandTools = await this.getTaskHandTools({
        projectId: +projectId,
        tasks,
      });
      const taskMachines = await this.getTaskMachines({
        projectId: +projectId,
        tasks,
      });
      const taskDocuments = await this.getTaskDocuments({
        projectId: +projectId,
        tasks,
      });
      // const upcomingTasks = await this.getUpcomingTasks({ tasks });
      // const labourAttendance = await this.getLabourAttendance();
      const allUpdates = await this.getAllUpdates({ tasks });
      // const overallSiteActivities = await this.getOverallSiteActivities({
      //   projectId,
      // });
      // const requestedMaterials = await this.getRequestedMaterials({
      //   projectId: +projectId,
      // });
      const issues = await this.getIssues({ tasks });
      // const inventory = await this.getInventory();

      return (ctx.body = {
        success: true,
        message: "Get data for the project report successfully!",
        data: {
          general: project,
          task_statuses: taskStatuses,
          task_hand_tools: taskHandTools,
          task_machines: taskMachines,
          task_documents: taskDocuments,
          // upcoming_tasks: upcomingTasks,
          // labour_attendance: labourAttendance,
          all_updates: allUpdates,
          // overall_site_activities: overallSiteActivities,
          // requested_materials: requestedMaterials,
          // inventory,
          issues,
        },
      });
    } catch (error) {
      console.log(error);

      return (ctx.body = {
        success: false,
        message: "Get data for the project report unsuccessfully!",
      });
    }
  },
});
