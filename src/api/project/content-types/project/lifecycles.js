const _ = require("lodash");
const moment = require("moment");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    // Currently, emails are sent to project managers
    if (result?.project_managers) {
      result.project_managers?.forEach((projectManager) => {
        if (projectManager?.email_1) {
          recipients.push(projectManager?.email_1);
        }

        if (projectManager?.email_2) {
          recipients.push(projectManager?.email_2);
        }
      });
    }

    if (result?.members) {
      result.members?.forEach((member) => {
        if (member?.email_1) {
          recipients.push(member?.email_1);
        }

        if (member?.email_2) {
          recipients.push(member?.email_2);
        }
      });
    }

    if (recipients.length > 0) {
      await strapi.entityService.create("api::email-queue.email-queue", {
        data: {
          template: templateId,
          data: result,
          recipients,
        },
      });
    }
  } catch (error) {
    console.log("project:send-email", error);
  }
};

function calcDelay(
  estimatedStartDate,
  estimatedEndDate,
  actualStartDate,
  actualEndDate,
  unit = "days",
) {
  let estStart = moment.utc(estimatedStartDate);
  let estEnd = moment.utc(estimatedEndDate);
  let actStart = moment.utc(actualStartDate);
  let actEnd = moment.utc(actualEndDate);

  let estimatedDuration = estEnd.diff(estStart, unit);
  let actualDuration = actEnd.diff(actStart, unit);

  return actualDuration - estimatedDuration;
}

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    await strapi.entityService.create("api::conversation.conversation", {
      data: {
        name: data?.name,
        type: "project",
        uid: data?.uid,
        creator: data?.creator,
        members: _.union(data?.members, data?.project_managers),
        project_id: (data?.id),
      },
    });
  },
  async afterCreate(event) {
    try {
      const { result: resultData } = event;

      const result = await strapi.db.query("api::project.project").findOne({
        where: {
          id: resultData?.id,
        },
        populate: true,
      });

      sendEmail("project-created", strapi, result);

      if (result?.sanctioned_budget > result?.estimated_budget) {
        sendEmail("project-budget-alarm", strapi, result);
      }

      if (
        result?.start_date &&
        result?.end_date &&
        result?.actual_start_date &&
        result?.actual_end_date
      ) {
        const delay = calcDelay(
          result?.start_date,
          result?.end_date,
          result?.actual_start_date,
          result?.actual_end_date,
        );

        if (delay > 0) {
          sendEmail("project-delay-alarm", strapi, {
            ...result,
            delay,
          });
        }
      }
    } catch (error) {
      console.log("[project.lifecycles]", error);
    }
  },
  async afterUpdate(event) {
    const { result } = event;

    const entry = await strapi.db.query("api::project.project").findOne({
      where: {
        id: result?.id,
      },
      populate: true,
    });

    if (result?.sanctioned_budget > result?.estimated_budget) {
      sendEmail("project-budget-alarm", strapi, entry);
    }

    if (
      result?.start_date &&
      result?.end_date &&
      result?.actual_start_date &&
      result?.actual_end_date
    ) {
      const delay = calcDelay(
        result?.start_date,
        result?.end_date,
        result?.actual_start_date,
        result?.actual_end_date,
      );

      if (delay > 0) {
        sendEmail("project-delay-alarm", strapi, {
          ...result,
          delay,
        });
      }
    }
  },
};
