const { isEmpty } = require("lodash");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    const project = result?.task?.project;

    if (isEmpty(project)) {
      return;
    }

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
    console.log("[task-document.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db
        .query("api::task-document.task-document")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: {
            task: {
              populate: {
                project: {
                  populate: true,
                },
              },
            },
          },
        });

      if (!isEmpty(entry)) {
        entry["task_name"] = entry?.task?.name;
        entry["document_name"] = entry?.name;
        entry["description"] = entry?.description;

        sendEmail("task-document-created", strapi, entry);
      }
    } catch (error) {
      console.log("[task-document.afterCreate]", error);
    }
  },
  async afterUpdate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db
        .query("api::task-document.task-document")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: {
            task: {
              project: {
                populate: true,
              },
            },
          },
        });

      if (!isEmpty(entry)) {
        entry["task_name"] = entry?.task?.name;
        entry["document_name"] = entry?.name;
        entry["description"] = entry?.description;

        sendEmail("task-document-updated", strapi, entry);
      }
    } catch (error) {
      console.log("[task-document.afterUpdate]", error);
    }
  },
};
