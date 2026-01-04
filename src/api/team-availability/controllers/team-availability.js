const moment = require("moment");

module.exports = ({ strapi }) => ({
  async getAll(ctx) {
    try {
      const { start_time, end_time, members = [] } = ctx?.request?.query;
      let stats = {};

      let startingMoment = moment();
      let endingMoment = moment().add(90, "days");

      if (start_time) {
        startingMoment = moment(new Date(start_time));
      }

      if (end_time) {
        endingMoment = moment(new Date(end_time));
      }

      let tasks = await strapi.db.query("api::task.task").findMany({
        populate: ["assignees"],
      });

      while (startingMoment <= endingMoment) {
        let entries = tasks
          ?.filter(
            (task) =>
              startingMoment?.valueOf() >=
                moment(task?.start_date)?.startOf("day")?.valueOf() &&
              startingMoment?.valueOf() <=
                moment(task?.end_date)?.endOf("day")?.valueOf() &&
              moment(task?.start_date)?.startOf("day")?.valueOf() <=
                endingMoment &&
              moment(task?.end_date)?.endOf("day")?.valueOf() <= endingMoment
          )
          ?.map((task) => {
            return {
              taskId: task?.id,
              assigneeIds: task?.assignees?.map((assignee) => assignee?.id),
            };
          });

        stats[startingMoment?.clone()?.format("YYYY-MM-DD")] = entries;

        startingMoment.add(1, "days");
      }

      let employees = await strapi.db.query("api::employee.employee").findMany({
        select: ["id", "uid", "first_name", "last_name", "middle_name"],
      });

      employees = employees
        ?.filter(
          (employee) => members?.length === 0 || members?.includes(employee?.id)
        )
        ?.map((employee) => {
          let counts = {};

          Object.keys(stats)?.forEach((key) => {
            let count = 0;

            stats?.[key]?.forEach((item) => {
              count += item?.assigneeIds?.filter(
                (item) => item === employee?.id
              )?.length;
            });
            counts[key] = count;
          });

          return {
            ...employee,
            counts,
          };
        });

      return (ctx.body = {
        success: true,
        message: "Get all team availability successfully!",
        data: employees,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        message: "Get all team availability unsuccessfully!",
      });
    }
  },
});
