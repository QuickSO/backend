const knex = require("../utils/knex");
const { fillMissingData } = require("../utils");
const moment = require("moment");
const { parse } = require("json2csv");

module.exports = ({ strapi }) => ({
  async getReportData(ctx) {
    try {
      const { code, params = null } = ctx?.request?.query;

      const reportQuery = await strapi
        .query("api::report-query.report-query")
        .findOne({
          where: {
            code,
          },
        });

      if (!reportQuery) {
        throw new Error("Report query not found");
      }

      let trimmedQueryString = reportQuery?.query_string?.replace(
        /(\r\n|\n|\r)/gm,
        " "
      );

      if (
        params !== null &&
        (trimmedQueryString?.includes("{") || trimmedQueryString?.includes("}"))
      ) {
        Object.keys(params)?.forEach((key) => {
          trimmedQueryString = trimmedQueryString?.replace(
            `{${key}}`,
            params?.[key]
          );
        });
      }

      const results = await knex.raw(trimmedQueryString);
      const data = fillMissingData(results.rows, results.fields);

      let csv = "";

      if (data?.length > 0) {
        const fields = Object.keys(data?.[0]);
        const opts = { fields };

        csv = parse(data, opts);
      }

      let fileName = moment().unix();
      ctx.response.attachment(fileName + ".csv");
      ctx.response.type = "application/ms-excel";
      ctx.body = csv;
    } catch (err) {
      console.error("reporter.getReportData", err);

      ctx.send(
        {
          success: false,
          message: err.message || err,
        },
        400
      );
    }
  },
});
