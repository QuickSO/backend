const moment = require("moment");
const _ = require("lodash");
const { DATE_TIME_FORMAT } = require("../_constants");

module.exports = ({ strapi }) => ({
  async getStats(ctx) {
    try {
      let data = {
        total_salary: 0,
        total_bonus: 0,
        total_employees: 0,
        average_base_salary: 0,
      };

      const employees = await strapi.db
        .query(`api::employee.employee`)
        .findMany({
          is_deleted: false,
          populate: true,
        });

      employees?.forEach((employee) => {
        data["total_employees"] += 1;
        data["total_salary"] += employee.basic_salary;
        data["total_bonus"] += employee?.bonus;
        data["average_base_salary"] =
          data["total_salary"] / data["total_employees"];
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
  async getEmployeesPerGender(ctx) {
    try {
      let totalEmployees = 0;
      let totalMales = 0;
      let totalFemales = 0;
      let totalUncategorized = 0;

      const employees = await strapi.db
        .query(`api::employee.employee`)
        .findMany({
          is_deleted: false,
          populate: true,
        });

      employees?.forEach((employee) => {
        totalEmployees += 1;

        if (employee?.gender === "Male" || employee?.gender === "Female") {
          if (employee?.gender === "Male") {
            totalMales += 1;
          }

          if (employee?.gender === "Female") {
            totalFemales += 1;
          }
        } else {
          totalUncategorized += 1;
        }
      });

      const data = [
        {
          type: "Male",
          value: totalMales,
        },
        {
          type: "Female",
          value: totalFemales,
        },
        {
          type: "Uncategorized",
          value: totalUncategorized,
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
  async getEmployeesPerLocation(ctx) {
    try {
      let locationsCount = {
        0: 0,
      };
      let locationsData = {};

      const employees = await strapi.db
        .query(`api::employee.employee`)
        .findMany({
          is_deleted: false,
          populate: true,
        });

      employees?.forEach((employee) => {
        if (employee?.city) {
          if (employee?.city?.id in locationsCount) {
            locationsCount[employee?.city?.id] += 1;
          } else {
            locationsData[employee?.city?.id] = {
              name: `${employee?.city?.name} (${employee?.state?.name})`,
            };
            locationsCount[employee?.city?.id] = 1;
          }
        } else {
          locationsCount[0] += 1;
        }
      });

      return (ctx.body = {
        success: true,
        data: Object.keys(locationsCount)?.map((key) => ({
          location: +key === 0 ? "Uncategorized" : locationsData?.[key]?.name,
          employees: locationsCount?.[key],
        })),
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getEmployeesPerDepartment(ctx) {
    try {
      let departmentsCount = {
        0: 0,
      };
      let departmentsData = {};

      const employees = await strapi.db
        .query(`api::employee.employee`)
        .findMany({
          is_deleted: false,
          populate: true,
        });

      employees?.forEach((employee) => {
        if (employee?.department) {
          if (employee?.department?.id in departmentsCount) {
            departmentsCount[employee?.department?.id] += 1;
          } else {
            departmentsData[employee?.department?.id] = employee?.department;
            departmentsCount[employee?.department?.id] = 1;
          }
        } else {
          departmentsCount[0] += 1;
        }
      });

      return (ctx.body = {
        success: true,
        data: Object.keys(departmentsCount)?.map((key) => ({
          department:
            +key === 0 ? "Uncategorized" : departmentsData?.[key]?.name,
          employees: departmentsCount?.[key],
        })),
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getTicketStatuses(ctx) {
    try {
      let totalClosed = 0;
      let totalOpened = 0;
      let totalUncategorized = 0;

      const tickets = await strapi.db.query(`api::ticket.ticket`).findMany({
        is_deleted: false,
        populate: true,
      });

      tickets?.forEach((ticket) => {
        if (ticket?.status === "Opened" || ticket?.status === "Closed") {
          if (ticket?.status === "Opened") {
            totalOpened += 1;
          }

          if (ticket?.status === "Closed") {
            totalClosed += 1;
          }
        } else {
          totalUncategorized += 1;
        }
      });

      const data = [
        {
          type: "Opened",
          value: totalOpened,
        },
        {
          type: "Closed",
          value: totalClosed,
        },
        {
          type: "Uncategorized",
          value: totalUncategorized,
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
  async getEmployeesPerProject(ctx) {
    try {
      const projects = await strapi.db.query(`api::project.project`).findMany({
        is_deleted: false,
        status: {
          $in: ["Active"],
        },
      });
      const tasks = await strapi.db.query(`api::task.task`).findMany({
        is_deleted: false,
        populate: true,
      });

      let data = [];

      projects?.forEach((project) => {
        let totalAssignees = 0;

        const filteredTasks = tasks?.filter(
          (item) => item?.project?.id === project?.id
        );

        filteredTasks?.forEach((task) => {
          totalAssignees += task?.assignees ? task?.assignees?.length : 0;
        });

        data?.push({
          project: project?.name,
          employees: totalAssignees,
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
  async getEmployees(ctx) {
    try {
      let employees = await strapi.db.query(`api::employee.employee`).findMany({
        is_deleted: false,
      });

      employees = employees?.map((employee) => ({
        ...employee,
        joining_month: moment(employee?.createdAt?.split("T")?.[0])?.format(
          "MM-YYYY"
        ),
      }));

      const groups = _.groupBy(employees, "joining_month");

      let data = [];

      Object.keys(groups)?.forEach((group) => {
        let totalMales = 0;
        let totalFemales = 0;
        let totalUncategorized = 0;

        groups?.[group]?.forEach((employee) => {
          if (employee?.gender === "Male" || employee?.gender === "Female") {
            if (employee?.gender === "Male") {
              totalMales += 1;
            }

            if (employee?.gender === "Female") {
              totalFemales += 1;
            }
          } else {
            totalUncategorized += 1;
          }
        });

        data.push({
          gender: "Male",
          value: totalMales,
          date: group,
        });

        data.push({
          gender: "Female",
          value: totalFemales,
          date: group,
        });

        data.push({
          gender: "Uncategorized",
          value: totalUncategorized,
          date: group,
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
  //   async getStats(ctx) {
  //     try {
  //       return (ctx.body = {
  //         success: true,
  //         data,
  //       });
  //     } catch (error) {
  //       return (ctx.body = {
  //         success: false,
  //         error: error?.message,
  //       });
  //     }
  //   },
});
