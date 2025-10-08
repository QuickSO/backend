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

  if (result?.host) {
    if (result?.host?.email_1) {
      recipients.push(result?.host?.email_1);
    }

    if (result?.host?.email_2) {
      recipients.push(result?.host?.email_2);
    }
  }

  if (result?.notes_prepared_by) {
    if (result?.notes_prepared_by?.email_1) {
      recipients.push(result?.notes_prepared_by?.email_1);
    }

    if (result?.notes_prepared_by?.email_2) {
      recipients.push(result?.notes_prepared_by?.email_2);
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

const checkMeetings = async (strapi) => {
  try {
    console.log("[cron:meetings] Checking for meetings");

    const entries = await strapi.db.query("api::meeting.meeting").findMany({
      where: {
        $or: [
          {
            started_at: {
              $gte: moment().startOf("day").format(DATE_TIME_FORMAT),
              $lte: moment().endOf("day").format(DATE_TIME_FORMAT),
            },
            status: {
              $ne: "Rescheduled",
            },
          },
          {
            rescheduled_to: {
              $gte: moment().startOf("day").format(DATE_TIME_FORMAT),
              $lte: moment().endOf("day").format(DATE_TIME_FORMAT),
            },
            status: "Rescheduled",
          },
        ],
        is_deleted: false,
      },
      populate: {
        members: true,
        host: true,
        notes_prepared_by: true,
      },
    });

    if (entries?.length > 0) {
      const emailPromises = entries.map((entry) => {
        return sendEmail("meeting-inform", strapi, {
          ...entry,
          meeting_time:
            entry?.status === "Rescheduled"
              ? entry?.rescheduled_to
              : entry?.started_at,
        });
      });

      await Promise.all(emailPromises);
    }
  } catch (error) {
    console.log("[cron:meetings]", error);
  }
};

module.exports = {
  checkMeetings,
};
