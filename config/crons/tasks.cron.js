const moment = require("moment");
const DATE_TIME_FORMAT = "YYYY-MM-DD";

const sendEmail = async (templateId, strapi, result) => {
  let recipients = [];

  if (result?.assignees && result.assignees?.length > 0) {
    result.assignees.forEach((employee) => {
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

const checkTasks = async (strapi) => {
  try {
    console.log("[cron:tasks] Checking for tasks");

    const entries = await strapi.db.query("api::task.task").findMany({
      where: {
        start_date: {
          $gte: moment().startOf("day").format(DATE_TIME_FORMAT),
          $lte: moment().endOf("day").format(DATE_TIME_FORMAT),
        },
        is_deleted: false,
      },
      populate: {
        assignees: true,
        project: true,
      },
    });

    if (entries?.length > 0) {
      const emailPromises = entries.map((entry) => {
        return sendEmail("task-reminder", strapi, {
          ...entry,
          project_name: entry?.project?.name,
        });
      });

      await Promise.all(emailPromises);
    }
  } catch (error) {
    console.log("[cron:tasks]", error);
  }
};

module.exports = {
  checkTasks,
};
