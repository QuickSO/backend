const { isEmpty } = require("lodash");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    if (result?.employee) {
      if (result.employee?.email_1) {
        recipients.push(result.employee.email_1);
      }

      if (result.employee?.email_2) {
        recipients.push(result.employee.email_2);
      }
    }

    if (recipients?.length > 0) {
      await strapi.entityService.create("api::email-queue.email-queue", {
        data: {
          template: templateId,
          data: result,
          recipients,
        },
      });
    }
  } catch (error) {
    console.log("to-do:send-email", error);
  }
};

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    let entry = await strapi.db.query("api::to-do.to-do").findOne({
      where: {
        id: result?.id,
      },
      populate: {
        employee: true,
      },
    });

    if (!isEmpty(entry)) {
      sendEmail("to-do-created", strapi, entry);
    }
  },
  async afterUpdate(event) {
    const { result } = event;

    let entry = await strapi.db.query("api::to-do.to-do").findOne({
      where: {
        id: result?.id,
      },
      populate: {
        employee: true,
      },
    });

    if (!isEmpty(entry)) {
      sendEmail("to-do-updated", strapi, entry);
    }
  },
};
