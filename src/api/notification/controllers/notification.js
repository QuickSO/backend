"use strict";

/**
 *  notification controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { isEmpty } = require("lodash");

module.exports = createCoreController(
  "api::notification.notification",
  ({ strapi }) => ({
    async getNotificationsList(ctx) {
      try {
        const { recipient_uid = "" } = ctx?.request?.body;

        if (recipient_uid === "") {
          throw new Error("Recipient UID is required!");
        }

        const recipient = await strapi.db
          .query("api::employee.employee")
          .findOne({
            where: {
              uid: recipient_uid,
            },
          });

        const appUser = await strapi.db
          .query("api::app-user.app-user")
          .findOne({
            where: {
              uid: recipient_uid,
            },
          });

        if (isEmpty(appUser) && isEmpty(recipient)) {
          throw new Error("Recipient not found!");
        }

        let filters = {};

        if (isEmpty(appUser) || appUser?.is_admin === false) {
          filters = {
            $or: [
              {
                recipients: {
                  $containsi: recipient?.email_1 || appUser?.email_1,
                },
              },
              {
                recipients: {
                  $containsi: recipient?.email_2 || appUser?.email_2,
                },
              },
            ],
          };
        }

        let entries = await strapi.db
          .query("api::notification.notification")
          .findMany({
            where: filters,
            orderBy: {
              createdAt: "desc",
            },
          });

        entries = entries?.map((entry) => {
          return {
            ...entry,
            status:
              // entry?.read_recipients?.includes(recipient?.email_1) ||
              // entry?.read_recipients?.includes(recipient?.email_2) ||
              entry?.read_recipients !== '' 
              // entry?.read_recipients !== null
                ? "READ"
                : "UNREAD",
          };
        });

        return (ctx.body = {
          success: true,
          message: "Successfully get all notifications!",
          data: {
            data: entries,
            meta: {
              pagination: {
                start: 0,
                limit: 9999,
                total: entries?.length,
              },
            },
          },
        });
      } catch (error) {
        console.log("[notification.getNotificationsList]", error);

        return (ctx.body = {
          success: false,
          message: error.message ?? "Failed to get all notifications!",
        });
      }
    },
    async getNotificationDetails(ctx) {
      try {
        const { id } = ctx?.request?.params;
        const { recipient_uid = "" } = ctx?.request?.body;

        if (recipient_uid === "") {
          throw new Error("Recipient UID is required!");
        }

        const recipient = await strapi.db
          .query("api::employee.employee")
          .findOne({
            where: {
              uid: recipient_uid,
            },
          });

        const appUser = await strapi.db
          .query("api::app-user.app-user")
          .findOne({
            where: {
              uid: recipient_uid,
            },
          });

        if (isEmpty(appUser) && isEmpty(recipient)) {
          throw new Error("Recipient not found!");
        }

        let filters = {};

        if (isEmpty(appUser) || appUser?.is_admin === false) {
          filters = {
            $and: [
              {
                id,
              },
              {
                $or: [
                  {
                    recipients: {
                      $containsi: recipient?.email_1 || appUser?.email_1,
                    },
                  },
                  {
                    recipients: {
                      $containsi: recipient?.email_2 || appUser?.email_2,
                    },
                  },
                ],
              },
            ],
          };
        } else {
          filters = {
            id,
          };
        }

        const entry = await strapi.db
          .query("api::notification.notification")
          .findOne({
            where: filters,
          });

        if (isEmpty(entry)) {
          throw new Error("Notification not found!");
        }

        let readRecipients = [];

        if (entry?.read_recipients !== null && entry?.read_recipients !== "") {
          readRecipients = entry.read_recipients?.split(";");
        }

        if (recipient?.email_1 && recipient?.email_1 !== "") {
          readRecipients.push(recipient?.email_1);
        }

        if (recipient?.email_2 && recipient?.email_2 !== "") {
          readRecipients.push(recipient?.email_2);
        }

        // if (isEmpty(appUser) || appUser?.is_admin === false) {
        await strapi.entityService.update(
          "api::notification.notification",
          entry?.id,
          {
            data: {
              read_recipients: readRecipients?.join(";"),
              read_recipients: 'true',
              
            },
          },
        );
        // }

        return (ctx.body = {
          success: true,
          message: "Successfully get notification details!",
          data: entry,
        });
      } catch (error) {
        console.log("[notification.getNotificationDetails]", error);

        return (ctx.body = {
          success: false,
          message: error.message ?? "Failed to get notification details!",
        });
      }
    },
    async countUnreadNotifications(ctx) {
      try {
        const { recipient_uid = "" } = ctx?.request?.body;

        if (recipient_uid === "") {
          throw new Error("Recipient UID is required!");
        }

        const recipient = await strapi.db
          .query("api::employee.employee")
          .findOne({
            where: {
              uid: recipient_uid,
            },
          });

        const appUser = await strapi.db
          .query("api::app-user.app-user")
          .findOne({
            where: {
              uid: recipient_uid,
            },
          });

        if (isEmpty(appUser) && isEmpty(recipient)) {
          throw new Error("Recipient not found!");
        }

        let filters = {};

        if (isEmpty(appUser) || appUser?.is_admin === false) {
          filters = {
            $and: [
              {
                $or: [
                  {
                    recipients: {
                      $containsi: recipient?.email_1,
                    },
                  },
                  {
                    recipients: {
                      $containsi: recipient?.email_2,
                    },
                  },
                ],
              },
            ],
          };
        }

        let entries = await strapi.db
          .query("api::notification.notification")
          .findMany({
            where: filters,
          });

        let count = 0;

        entries?.forEach((entry) => {
          if (
            entry?.read_recipients === null ||
            entry?.read_recipients === "" //||
            // (entry?.read_recipients?.includes(recipient?.email_1) === false &&
            //   entry?.read_recipients?.includes(recipient?.email_2) === false)
          ) {
            count += 1;
          }
        });

        return (ctx.body = {
          success: true,
          message: "Successfully counted unread notifications!",
          data: {
            count,
          },
        });
      } catch (error) {
        console.log("[notification.countUnreadNotifications]", error);

        return (ctx.body = {
          success: false,
          message: error.message ?? "Failed to count unread notifications!",
        });
      }
    },
  }),
);
