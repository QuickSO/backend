const moment = require("moment");
const DATE_TIME_FORMAT = "YYYY-MM-DD";

const sendEmail = async (templateId, strapi, result) => {
  let recipients = [];

  if (result?.employee && result?.status !== "Done") {
    if (result?.employee?.email_1) {
      recipients.push(result?.employee?.email_1);
    }

    if (result?.employee?.email_2) {
      recipients.push(result?.employee?.email_2);
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
};

const checkToDos = async (strapi) => {
  try {
    console.log("[cron:to-dos] Checking for to dos");

    const entries = await strapi.db.query("api::to-do.to-do").findMany({
      where: {
        time: {
          $gte: moment().startOf("day").format(DATE_TIME_FORMAT),
          $lte: moment().endOf("day").format(DATE_TIME_FORMAT),
        },
        is_deleted: false,
      },
      populate: {
        employee: true,
      },
    });

    if (entries?.length > 0) {
      const emailPromises = entries.map((entry) => {
        return sendEmail("to-do-inform", strapi, entry);
      });

      await Promise.all(emailPromises);
    }
  } catch (error) {
    console.log("[cron:to-dos]", error);
  }
};

module.exports = {
  checkToDos,
};
