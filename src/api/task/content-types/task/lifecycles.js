const { isEmpty } = require("lodash");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    const project = result?.project;

    if (!isEmpty(project)) {
      if (project?.project_managers) {
        project?.project_managers?.forEach((projectManager) => {
          if (projectManager?.email_1) {
            recipients.push(projectManager?.email_1);
          }

          if (projectManager?.email_2) {
            recipients.push(projectManager?.email_2);
          }
        });
      }

      if (project?.members) {
        project?.members?.forEach((member) => {
          if (member?.email_1) {
            recipients.push(member?.email_1);
          }

          if (member?.email_2) {
            recipients.push(member?.email_2);
          }
        });
      }
    }

    if (result?.assignees && result?.assignees?.length > 0) {
      result?.assignees?.forEach((employee) => {
        if (employee?.email_1) {
          recipients.push(employee?.email_1);
        }

        if (employee?.email_2) {
          recipients.push(employee?.email_2);
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
  } catch (error) {
    console.log("[task.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db.query("api::task.task").findOne({
        where: {
          id: result?.id,
        },
        populate: {
          project: {
            populate: {
              project_managers: true,
            },
          },
          assignees: true,
        },
      });

      if (!isEmpty(entry)) {
        sendEmail("task-created", strapi, entry);
      }
    } catch (error) {
      console.log("[task.afterCreate]", error);
    }
  },
  async afterUpdate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db.query("api::task.task").findOne({
        where: {
          id: result?.id,
        },
        populate: {
          project: {
            populate: {
              project_managers: true,
            },
          },
          assignees: true,
        },
      });

      if (!isEmpty(entry)) {
        sendEmail("task-updated", strapi, entry);
      }
    } catch (error) {
      console.log("[task.afterUpdate]", error);
    }
  },
};
