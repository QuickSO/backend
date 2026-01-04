const moment = require("moment");
const DATE_TIME_FORMAT = "YYYY-MM-DD";

const sendEmail = async (templateId, strapi, result) => {
  let recipients = [];

  if (result?.members && result.members?.length > 0) {
    result.members.forEach((employee) => {
      if (employee?.email_1) {
        recipients.push(employee.email_1);
      }

      if (employee?.email_2) {
        recipients.push(employee.email_2);
      }
    });
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
};

const checkEvents = async (strapi) => {
  try {
    console.log("[cron:events] Checking for events");

    const entries = await strapi.db.query("api::event.event").findMany({
      where: {
        time: {
          $gte: moment().startOf("day").format(DATE_TIME_FORMAT),
          $lte: moment().endOf("day").format(DATE_TIME_FORMAT),
        },
        is_deleted: false,
      },
      populate: {
        members: true,
      },
    });

    if (entries?.length > 0) {
      const emailPromises = entries.map((entry) => {
        return sendEmail("event-inform", strapi, entry);
      });

      await Promise.all(emailPromises);
    }
  } catch (error) {
    console.log("[cron:events]", error);
  }
};

module.exports = {
  checkEvents,
};
