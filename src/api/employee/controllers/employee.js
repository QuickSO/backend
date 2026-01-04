"use strict";

/**
 *  employee controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::employee.employee",
  ({ strapi }) => ({
    async getApprovers(ctx) {
      try {
        const appUsers = await strapi.db
          .query("api::app-user.app-user")
          .findMany({
            where: {
              user_type: "Employee",
            },
            select: ["uid"],
          });

        let employees = [];

        if (appUsers?.length > 0) {
          employees = await strapi.db.query("api::employee.employee").findMany({
            where: {
              uid: {
                $in: appUsers?.map((item) => item?.uid),
              },
            },
            populate: true,
          });
        }

        return (ctx.body = {
          success: true,
          message: "Get list of approvers successfully!",
          data: employees,
        });
      } catch (error) {
        return (ctx.body = {
          success: false,
          message: "Failed to get list of approvers!",
        });
      }
    },
  })
);