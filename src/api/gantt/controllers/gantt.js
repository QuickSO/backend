const _ = require("lodash");
const md5 = require("md5");
const moment = require("moment/moment");

module.exports = ({ strapi }) => ({
  async getByProjectId(ctx) {
    try {
      const { id } = ctx?.request?.params;
      let tasks = [];
      let dataPhase1 = [];

      const dailyReports = await strapi.db
        .query("api::daily-report.daily-report")
        .findMany({});

      dailyReports?.forEach((report) => {
        report?.tasks?.forEach((task) => {
          const dataObject = {
            task_id: task?.id,
            progress: task?.completion_percentage || 0,
            log_date_ts: moment(report?.date)?.unix(),
            finished_date_ts: moment(task?.finished_date)?.unix(),
          };

          dataPhase1?.push({
            ...dataObject,
            hash: md5(JSON.stringify(dataObject)),
          });
        });
      });

      dataPhase1 = _.groupBy(
        [...new Map(dataPhase1?.map((item) => [item["hash"], item])).values()],
        "task_id"
      );

      Object.keys(dataPhase1)?.forEach((taskId) => {
        const progress = Math.min(
          100,
          dataPhase1?.[taskId].reduce((acc, a) => acc + a?.progress, 0)
        );
        const startDateTs = Math.min(
          ...dataPhase1?.[taskId].map((o) => o.log_date_ts)
        );
        const endDateTs = Math.max(
          ...dataPhase1?.[taskId].map((o) => o.finished_date_ts)
        );

        tasks.push({
          id: +taskId,
          progress,
          actual_start_date: moment.unix(startDateTs)?.format("DD-MM-YYYY"),
          actual_end_date: moment.unix(endDateTs)?.format("DD-MM-YYYY"),
        });
      });

      return (ctx.body = {
        success: true,
        data: {
          id: +id,
          tasks,
        },
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
      });
    }
  },
});
