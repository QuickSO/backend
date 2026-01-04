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

    if (result?.approved_by) {
      if (result?.approved_by?.email_1) {
        recipients.push(result?.approved_by?.email_1);
      }

      if (result?.approved_by?.email_2) {
        recipients.push(result?.approved_by?.email_2);
      }
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
    console.log("[task-work.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db.query("api::task-work.task-work").findOne({
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
          work_item: {
            populate: true,
          },
          work_unit: {
            populate: true,
          },
          approved_by: true,
        },
      });

      if (!isEmpty(entry)) {
        entry["task_name"] = entry?.task?.name;
        entry["work_item_name"] = entry?.work_item?.name;
        entry["work_item_unit"] = entry?.work_unit?.name;
        entry["description"] = entry?.description;

        sendEmail("task-work-created", strapi, entry);
      }
    } catch (error) {
      console.log("[task-work.afterCreate]", error);
    }
  },
  async afterUpdate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db.query("api::task-work.task-work").findOne({
        where: {
          id: result?.id,
        },
        populate: {
          task: {
            project: {
              populate: true,
            },
          },
          work_item: {
            populate: true,
          },
          work_unit: {
            populate: true,
          },
          approved_by: true,
        },
      });

      if (!isEmpty(entry)) {
        entry["task_name"] = entry?.task?.name;
        entry["work_item_name"] = entry?.work_item?.name;
        entry["work_item_unit"] = entry?.work_unit?.name;
        entry["description"] = entry?.description;

        sendEmail("task-work-updated", strapi, entry);
      }
    } catch (error) {
      console.log("[task-work.afterUpdate]", error);
    }
  },
};
