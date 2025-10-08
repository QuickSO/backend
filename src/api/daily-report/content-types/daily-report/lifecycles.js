const { isEmpty } = require("lodash");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    const employee = result?.employee;
    if (employee) {
      if (employee.email_1) recipients.push(employee.email_1);
      if (employee.email_2) recipients.push(employee.email_2);
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
    console.error("[daily-report.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const tasks = result?.tasks;

    if (!isEmpty(tasks) && tasks?.length > 0) {
      let completedTasks = [];
      let pendingTasks = [];

      tasks?.forEach((task) => {
        if (task?.completed === "Yes") {
          completedTasks.push({
            id: task?.id,
            status: "Completed",
          });
        } else {
          pendingTasks.push({
            id: task?.id,
            end_date: task?.finished_date,
          });
        }
      });

      if (completedTasks?.length > 0) {
        const promises = completedTasks?.map(async (task) => {
          try {
            await strapi.entityService.update("api::task.task", task?.id, {
              status: "Completed",
            });
          } catch (error) {}
        });

        await Promise.allSettled(promises);
      }

      if (pendingTasks?.length > 0) {
        const promises = pendingTasks?.map(async (task) => {
          try {
            await strapi.entityService.update("api::task.task", task?.id, {
              end_date: task?.end_date,
            });
          } catch (error) {}
        });

        await Promise.allSettled(promises);
      }
    }

    // Send email notification
    try {
      const entry = await strapi.db.query("api::daily-report.daily-report").findOne({
        where: { id: result.id },
        populate: { employee: true },
      });

      if (entry) {
        await sendEmail("daily-report-created", strapi, entry);
      }
    } catch (error) {
      console.error("[daily-report.afterCreate]", error);
    }
  },
  async afterUpdate(event) {
    const { result } = event;
    const tasks = result?.tasks;

    if (!isEmpty(tasks) && tasks?.length > 0) {
      let completedTasks = [];
      let pendingTasks = [];

      tasks?.forEach((task) => {
        if (task?.completed === "Yes") {
          completedTasks.push({
            id: task?.id,
            status: "Completed",
          });
        } else {
          pendingTasks.push({
            id: task?.id,
            end_date: task?.finished_date,
          });
        }
      });

      if (completedTasks?.length > 0) {
        const promises = completedTasks?.map(async (task) => {
          try {
            await strapi.entityService.update("api::task.task", task?.id, {
              status: "Completed",
            });
          } catch (error) {}
        });

        await Promise.allSettled(promises);
      }

      if (pendingTasks?.length > 0) {
        const promises = pendingTasks?.map(async (task) => {
          try {
            await strapi.entityService.update("api::task.task", task?.id, {
              end_date: task?.end_date,
            });
          } catch (error) {}
        });

        await Promise.allSettled(promises);
      }
    }

    // Send email notification
    try {
      const entry = await strapi.db.query("api::daily-report.daily-report").findOne({
        where: { id: result.id },
        populate: { employee: true },
      });

      if (entry) {
        await sendEmail("daily-report-updated", strapi, entry);
      }
    } catch (error) {
      console.error("[daily-report.afterUpdate]", error);
    }
  },
};
