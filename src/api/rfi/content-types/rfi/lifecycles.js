"use strict";

/**
 *  notification controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { isEmpty, uniq } = require("lodash");

const splitSemicolons = (s) =>
  (typeof s === "string" && s.trim() !== "" ? s.split(";") : []).map((x) =>
    String(x || "").trim()
  );

const compactEmails = (...vals) =>
  uniq(
    vals
      .flat()
      .map((x) => String(x || "").trim())
      .filter(Boolean)
  );

module.exports = createCoreController(
  "api::notification.notification",
  ({ strapi }) => ({
    async getNotificationsList(ctx) {
      try {
        const { recipient_uid = "" } = ctx?.request?.body;
        if (!recipient_uid) {
          throw new Error("Recipient UID is required!");
        }

        // Resolve recipient sources (employee/app-user)
        const [recipient, appUser] = await Promise.all([
          strapi.db.query("api::employee.employee").findOne({
            where: { uid: recipient_uid },
          }),
          strapi.db.query("api::app-user.app-user").findOne({
            where: { uid: recipient_uid },
          }),
        ]);

        if (isEmpty(appUser) && isEmpty(recipient)) {
          throw new Error("Recipient not found!");
        }

        const email1 = recipient?.email_1 || appUser?.email_1 || "";
        const email2 = recipient?.email_2 || appUser?.email_2 || "";
        const myEmails = compactEmails(email1, email2);

        // Admins see all; non-admins filtered by recipients (emails)
        let filters = {};
        if (isEmpty(appUser) || appUser?.is_admin === false) {
          filters = {
            $or: [
              { recipients: { $containsi: email1 } },
              { recipients: { $containsi: email2 } },
            ],
          };
        }

        let entries = await strapi.db
          .query("api::notification.notification")
          .findMany({
            where: filters,
            orderBy: { createdAt: "desc" },
          });

        // Compute READ/UNREAD per user from read_recipients (semicolon-separated)
        entries = entries.map((entry) => {
          const readEmails = splitSemicolons(entry?.read_recipients);
          const didRead = myEmails.some((em) => readEmails.includes(em));
          return {
            ...entry,
            status: didRead ? "READ" : "UNREAD",
          };
        });

        ctx.body = {
          success: true,
          message: "Successfully get all notifications!",
          data: {
            data: entries,
            meta: {
              pagination: {
                start: 0,
                limit: 9999,
                total: entries?.length || 0,
              },
            },
          },
        };
      } catch (error) {
        strapi.log.error("[notification.getNotificationsList]", error);
        ctx.body = {
          success: false,
          message: error.message ?? "Failed to get all notifications!",
        };
      }
    },

    async getNotificationDetails(ctx) {
      try {
        const { id } = ctx?.request?.params;
        const { recipient_uid = "" } = ctx?.request?.body;

        if (!recipient_uid) {
          throw new Error("Recipient UID is required!");
        }

        const [recipient, appUser] = await Promise.all([
          strapi.db.query("api::employee.employee").findOne({
            where: { uid: recipient_uid },
          }),
          strapi.db.query("api::app-user.app-user").findOne({
            where: { uid: recipient_uid },
          }),
        ]);

        if (isEmpty(appUser) && isEmpty(recipient)) {
          throw new Error("Recipient not found!");
        }

        const email1 = recipient?.email_1 || appUser?.email_1 || "";
        const email2 = recipient?.email_2 || appUser?.email_2 || "";

        let filters = {};
        if (isEmpty(appUser) || appUser?.is_admin === false) {
          filters = {
            $and: [
              { id },
              {
                $or: [
                  { recipients: { $containsi: email1 } },
                  { recipients: { $containsi: email2 } },
                ],
              },
            ],
          };
        } else {
          filters = { id };
        }

        const entry = await strapi.db
          .query("api::notification.notification")
          .findOne({ where: filters });

        if (isEmpty(entry)) {
          throw new Error("Notification not found!");
        }

        // Mark THIS user as read (append their email; don't overwrite)
        const currentReads = splitSemicolons(entry?.read_recipients);
        const nextReads = uniq(currentReads.concat(compactEmails(email1, email2)));

        await strapi.entityService.update(
          "api::notification.notification",
          entry?.id,
          {
            data: {
              read_recipients: nextReads.join(";"),
            },
          }
        );

        ctx.body = {
          success: true,
          message: "Successfully get notification details!",
          data: entry,
        };
      } catch (error) {
        strapi.log.error("[notification.getNotificationDetails]", error);
        ctx.body = {
          success: false,
          message: error.message ?? "Failed to get notification details!",
        };
      }
    },

    async countUnreadNotifications(ctx) {
      try {
        const { recipient_uid = "" } = ctx?.request?.body;
        if (!recipient_uid) {
          throw new Error("Recipient UID is required!");
        }

        const [recipient, appUser] = await Promise.all([
          strapi.db.query("api::employee.employee").findOne({
            where: { uid: recipient_uid },
          }),
          strapi.db.query("api::app-user.app-user").findOne({
            where: { uid: recipient_uid },
          }),
        ]);

        if (isEmpty(appUser) && isEmpty(recipient)) {
          throw new Error("Recipient not found!");
        }

        const email1 = recipient?.email_1 || appUser?.email_1 || "";
        const email2 = recipient?.email_2 || appUser?.email_2 || "";
        const myEmails = compactEmails(email1, email2);

        let filters = {};
        if (isEmpty(appUser) || appUser?.is_admin === false) {
          filters = {
            $or: [
              { recipients: { $containsi: email1 } },
              { recipients: { $containsi: email2 } },
            ],
          };
        }

        const entries = await strapi.db
          .query("api::notification.notification")
          .findMany({ where: filters });

        let count = 0;
        entries.forEach((entry) => {
          const readEmails = splitSemicolons(entry?.read_recipients);
          const didRead = myEmails.some((em) => readEmails.includes(em));
          if (!didRead) count += 1;
        });

        ctx.body = {
          success: true,
          message: "Successfully counted unread notifications!",
          data: { count },
        };
      } catch (error) {
        strapi.log.error("[notification.countUnreadNotifications]", error);
        ctx.body = {
          success: false,
          message: error.message ?? "Failed to count unread notifications!",
        };
      }
    },
  })
);
