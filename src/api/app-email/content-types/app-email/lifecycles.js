const { isEmpty } = require("lodash");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];
    let ccRecipients = [];
    let bccRecipients = [];

    if (result?.recipients && result?.recipients?.length > 0) {
      result?.recipients?.forEach((employee) => {
        if (employee?.email_1) {
          recipients.push(employee?.email_1);
        }

        if (employee?.email_2) {
          recipients.push(employee?.email_2);
        }
      });
    }

    if (result?.cc_recipients && result?.cc_recipients?.length > 0) {
      result?.cc_recipients?.forEach((employee) => {
        if (employee?.email_1) {
          ccRecipients.push(employee?.email_1);
        }

        if (employee?.email_2) {
          ccRecipients.push(employee?.email_2);
        }
      });
    }

    if (result?.bcc_recipients && result?.bcc_recipients?.length > 0) {
      result?.bcc_recipients?.forEach((employee) => {
        if (employee?.email_1) {
          bccRecipients.push(employee?.email_1);
        }

        if (employee?.email_2) {
          bccRecipients.push(employee?.email_2);
        }
      });
    }

    await strapi.entityService.create("api::email-queue.email-queue", {
      data: {
        template: templateId,
        data: result,
        recipients,
        cc_recipients: ccRecipients,
        bcc_recipients: bccRecipients,
      },
    });
  } catch (error) {
    console.log("[app-email.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      const entry = await strapi.db.query("api::app-email.app-email").findOne({
        where: {
          id: result?.id,
        },
        populate: true,
      });

      if (!isEmpty(entry)) {
        if (entry?.status === "Sent") {
          sendEmail("email-sent", strapi, entry);
        }

        if (entry?.status === "Draft") {
          sendEmail("email-draft-created", strapi, entry);
        }
      }
    } catch (error) {
      console.log("[app-email.afterCreate]", error);
    }
  },
  async afterUpdate(event) {
    try {
      const { result } = event;

      const entry = await strapi.db.query("api::app-email.app-email").findOne({
        where: {
          id: result?.id,
        },
        populate: true,
      });

      if (!isEmpty(entry)) {
        if (entry?.status === "Sent") {
          sendEmail("email-sent", strapi, entry);
        }

        if (entry?.status === "Draft") {
          sendEmail("email-draft-updated", strapi, entry);
        }
      }
    } catch (error) {
      console.log("[app-email.afterUpdate]", error);
    }
  },
};
