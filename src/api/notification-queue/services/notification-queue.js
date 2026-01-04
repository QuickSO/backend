"use strict";

/**
 * notification-queue service
 */

const { createCoreService } = require("@strapi/strapi").factories;
const { uuid } = require("uuidv4");

module.exports = createCoreService(
  "api::notification-queue.notification-queue",
  ({ strapi }) => ({
    async onProjectCreation(data) {
      let notifications = [];

      const notification = {
        title: "New Project Created",
        content: `A new project called "${data?.name}" has just been created!`,
        uid: uuid(),
      };

      // Employees
      const employees = [...data?.project_managers, ...data?.members];
      employees.forEach((itemId) => {
        notifications.push({
          ...notification,
          recipient_type: "EMPLOYEE",
          recipient_id: `${itemId}`,
        });
      });

      // Partners
      data?.partners?.forEach((itemId) => {
        notifications.push({
          ...notification,
          recipient_type: "PARTNER",
          recipient_id: `${itemId}`,
        });
      });

      // Vendors
      data?.vendors?.forEach((itemId) => {
        notifications.push({
          ...notification,
          recipient_type: "VENDOR",
          recipient_id: `${itemId}`,
        });
      });

      // Sub Contractors
      data?.sub_contractors?.forEach((itemId) => {
        notifications.push({
          ...notification,
          recipient_type: "SUB_CONTRACTOR",
          recipient_id: `${itemId}`,
        });
      });

      // Agencies
      data?.agencies?.forEach((itemId) => {
        notifications.push({
          ...notification,
          recipient_type: "AGENCY",
          recipient_id: `${itemId}`,
        });
      });

      const requests = notifications?.map((noti) => {
        return strapi.entityService.create("api::notification.notification", {
          data: noti,
        });
      });

      await Promise.all(requests);
    },
  })
);
