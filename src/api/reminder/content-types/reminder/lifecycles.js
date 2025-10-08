const { isEmpty } = require("lodash");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    if (result?.employees) {
      if (result.employees?.length > 0) {
        result.employees.forEach((employee) => {
          if (employee?.email_1) {
            recipients.push(employee.email_1);
          }
          if (employee?.email_2) {
            recipients.push(employee.email_2);
          }
        });
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
    console.log("reminder:send-email", error);
  }
};

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    let entry = await strapi.db.query("api::reminder.reminder").findOne({
      where: {
        id: result?.id,
      },
      populate: {
        employees: true,
      },
    });

    if (!isEmpty(entry)) {
      sendEmail("reminder-created", strapi, entry);
    }
  },
  async afterUpdate(event) {
    const { result } = event;

    let entry = await strapi.db.query("api::reminder.reminder").findOne({
      where: {
        id: result?.id,
      },
      populate: {
        employees: true,
      },
    });

    if (!isEmpty(entry)) {
      sendEmail("reminder-updated", strapi, entry);
    }
  },
};
