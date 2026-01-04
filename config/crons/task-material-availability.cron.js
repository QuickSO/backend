const { isEmpty } = require("lodash");

const getTaskNotiRecipients = async (strapi, taskId) => {
  try {
    const task = await strapi.db.query("api::task.task").findOne({
      where: {
        id: taskId,
      },
      populate: ["assignees", "project.members", "project.project_managers"],
    });

    if (isEmpty(task)) {
      throw new Error();
    }

    let recipients = [];

    task?.assignees?.forEach((assignee) => {
      recipients?.push(assignee?.email_1 || null);
      recipients?.push(assignee?.email_2 || null);
    });

    task?.project?.members?.forEach((member) => {
      recipients?.push(member?.email_1 || null);
      recipients?.push(member?.email_2 || null);
    });

    task?.project?.project_managers?.forEach((manager) => {
      recipients?.push(manager?.email_1 || null);
      recipients?.push(manager?.email_2 || null);
    });

    return recipients?.filter((item) => item !== null);
  } catch (error) {
    console.log(
      "[cron:task-material-availability:getTaskNotiRecipients]",
      error,
    );

    return [];
  }
};

const sendEmail = async (templateId, strapi, taskId, data) => {
  try {
    let recipients = await getTaskNotiRecipients(strapi, taskId);

    if (recipients?.length > 0) {
      await strapi.entityService.create("api::email-queue.email-queue", {
        data: {
          template: templateId,
          data,
          recipients,
        },
      });
    }
  } catch (error) {
    console.log("[cron:task-material-availability:sendEmail]", error);
  }
};

const checkTaskMaterialAvailability = async (strapi) => {
  try {
    console.log(
      "[cron:task-material-availabilit] Checking for task materials availability",
    );

    const taskMaterials = await strapi.db
      .query("api::task-material.task-material")
      .findMany({
        where: {
          task: {
            status: "Active",
          },
        },
        populate: {
          material_item: true,
          material_unit: true,
          task: true,
        },
      });

    const stockLedgers = await strapi.db
      .query("api::stock-ledger.stock-ledger")
      .findMany({
        populate: {
          material_item: true,
          material_unit: true,
        },
      });

    let missingMaterials = [];

    taskMaterials?.forEach((taskMaterial) => {
      const stockLedger =
        stockLedgers?.find((item) => {
          return (
            item?.material_item?.id === taskMaterial?.material_item?.id &&
            item?.material_unit?.id === taskMaterial?.material_unit?.id
          );
        }) || null;

      if (stockLedger === null) {
        missingMaterials.push(taskMaterial);
      }
    });

    if (missingMaterials?.length > 0) {
      const emailPromises = missingMaterials?.map((entry) => {
        return sendEmail("task-material-missing", strapi, entry?.task?.id, {
          material_item_name: entry?.material_item?.name,
          material_unit_name: entry?.material_unit?.name,
          required_quantity: entry?.quantity,
        });
      });

      await Promise.allSettled(emailPromises);
    }
  } catch (error) {
    console.log(
      "[cron:task-material-availability:checkTaskMaterialAvailability]",
      error,
    );
  }
};

module.exports = {
  checkTaskMaterialAvailability,
};
