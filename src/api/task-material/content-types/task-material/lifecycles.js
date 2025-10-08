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
    console.log("[task-material.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db
        .query("api::task-material.task-material")
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
            material_item: {
              populate: true,
            },
            material_unit: {
              populate: true,
            },
            approved_by: true,
          },
        });

      if (!isEmpty(entry)) {
        entry["task_name"] = entry?.task?.name;
        entry["material_item_name"] = entry?.material_item?.name;
        entry["material_item_unit"] = entry?.material_item_unit;
        entry["material_quantity"] = entry?.quantity || 0;
        entry["description"] = entry?.description;

        sendEmail("task-material-created", strapi, entry);
      }
    } catch (error) {
      console.log("[task-material.afterCreate]", error);
    }
  },
  async afterUpdate(event) {
    try {
      const { result } = event;

      let entry = await strapi.db
        .query("api::task-material.task-material")
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
            material_item: {
              populate: true,
            },
            material_unit: {
              populate: true,
            },
            approved_by: true,
          },
        });

      if (!isEmpty(entry)) {
        entry["task_name"] = entry?.task?.name;
        entry["material_name"] = entry?.material_item?.name;
        entry["material_unit"] = entry?.material_unit?.name;
        entry["material_quantity"] = entry?.quantity || 0;
        entry["description"] = entry?.description;

        sendEmail("task-material-updated", strapi, entry);
      }
    } catch (error) {
      console.log("[task-material.afterUpdate]", error);
    }
  },
};
