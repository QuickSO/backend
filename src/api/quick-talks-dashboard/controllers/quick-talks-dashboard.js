const moment = require("moment");
const _ = require("lodash");

module.exports = ({ strapi }) => ({
  async getStatistics(ctx) {
    try {
      const data = {
        total_meetings: 0,
        total_events: 0,
        total_reminders: 0,
        total_to_dos: 0,
        total_unread_mails: 0,
        total_unopened_chats: 0,
      };

      data["total_meetings"] = await strapi.db
        .query("api::meeting.meeting")
        .count({
          where: {
            is_deleted: false,
          },
        });

      data["total_events"] = await strapi.db.query("api::event.event").count({
        where: {
          is_deleted: false,
        },
      });

      data["total_reminders"] = await strapi.db
        .query("api::reminder.reminder")
        .count({
          where: {
            is_deleted: false,
          },
        });

      data["total_to_dos"] = await strapi.db.query("api::to-do.to-do").count({
        where: {
          is_deleted: false,
        },
      });

      data["total_unread_mails"] = await strapi.db
        .query("api::app-email.app-email")
        .count({
          where: {
            is_deleted: false,
            is_read: false,
          },
        });

      data["total_chat_groups"] = await strapi.db
        .query("api::conversation.conversation")
        .count({
          where: {},
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
  async getMeetings(ctx) {
    try {
      let entries = await strapi.db.query(`api::meeting.meeting`).findMany({
        is_deleted: false,
      });

      entries = entries?.map((entry) => ({
        ...entry,
        date_for_group: moment(entry?.createdAt?.split("T")?.[0])?.format(
          "DD-MM-YYYY"
        ),
      }));

      const groups = _.groupBy(entries, "date_for_group");

      let data = [];

      Object.keys(groups)?.forEach((group) => {
        data.push({
          value: groups?.[group]?.length || 0,
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
  async getEvents(ctx) {
    try {
      let entries = await strapi.db.query(`api::event.event`).findMany({
        is_deleted: false,
      });

      entries = entries?.map((entry) => ({
        ...entry,
        date_for_group: moment(entry?.createdAt?.split("T")?.[0])?.format(
          "DD-MM-YYYY"
        ),
      }));

      const groups = _.groupBy(entries, "date_for_group");

      let data = [];

      Object.keys(groups)?.forEach((group) => {
        data.push({
          value: groups?.[group]?.length || 0,
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
  async getReminders(ctx) {
    try {
      let entries = await strapi.db.query(`api::reminder.reminder`).findMany({
        is_deleted: false,
      });

      entries = entries?.map((entry) => ({
        ...entry,
        date_for_group: moment(entry?.createdAt?.split("T")?.[0])?.format(
          "DD-MM-YYYY"
        ),
      }));

      const groups = _.groupBy(entries, "date_for_group");

      let data = [];

      Object.keys(groups)?.forEach((group) => {
        data.push({
          value: groups?.[group]?.length || 0,
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
  async getToDos(ctx) {
    try {
      let entries = await strapi.db.query(`api::to-do.to-do`).findMany({
        is_deleted: false,
      });

      entries = entries?.map((entry) => ({
        ...entry,
        date_for_group: moment(entry?.createdAt?.split("T")?.[0])?.format(
          "DD-MM-YYYY"
        ),
      }));

      const groups = _.groupBy(entries, "date_for_group");

      let data = [];

      Object.keys(groups)?.forEach((group) => {
        data.push({
          value: groups?.[group]?.length || 0,
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
  async getMailStatuses(ctx) {
    try {
      let values = {
        read: 0,
        unread: 0,
      };

      const entries = await strapi.db
        .query(`api::app-email.app-email`)
        .findMany({
          is_deleted: false,
          populate: true,
        });

      entries?.forEach((entry) => {
        if (entry?.is_read) {
          values["read"] += 1;
        } else {
          values["unread"] += 1;
        }
      });

      const data = [
        {
          status: "Read",
          value: values?.read,
        },
        {
          status: "Unread",
          value: values?.unread,
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
  async getChatStatuses(ctx) {
    try {
      let values = {
        read: 0,
        unread: 0,
      };

      const entries = await strapi.db
        .query(`api::chat-message.chat-message`)
        .findMany({
          is_deleted: false,
          populate: true,
        });

      entries?.forEach((entry) => {
        if (entry?.is_read) {
          values["read"] += 1;
        } else {
          values["unread"] += 1;
        }
      });

      const data = [
        {
          status: "Read",
          value: values?.read,
        },
        {
          status: "Unread",
          value: values?.unread,
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
});
