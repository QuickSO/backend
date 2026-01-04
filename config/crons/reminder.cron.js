const moment = require("moment");
const DATE_TIME_FORMAT = "YYYY-MM-DD";

const sendEmail = async (templateId, strapi, result) => {
  let recipients = [];

  if (result?.employees && result.employees?.length > 0) {
    result.employees.forEach((employee) => {
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

const checkReminders = async (strapi) => {
  try {
    console.log("[cron:reminders] Checking for reminders");

    const reminders = await strapi.db.query("api::reminder.reminder").findMany({
      where: {
        date: {
          $gte: moment().startOf("day").format(DATE_TIME_FORMAT),
          $lte: moment().endOf("day").format(DATE_TIME_FORMAT),
        },
        is_deleted: false,
      },
      populate: {
        employees: true,
      },
    });

    if (reminders.length > 0) {
      const emailPromises = reminders.map((reminder) => {
        return sendEmail("reminder-inform", strapi, reminder);
      });

      await Promise.all(emailPromises);
    }
  } catch (error) {
    console.log("[cron:reminders]", error);
  }
};

module.exports = {
  checkReminders,
};
