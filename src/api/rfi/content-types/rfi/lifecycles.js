const { isEmpty } = require("lodash");

const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    const project = result?.project;
    if (project) {
      project?.project_managers?.forEach(pm => {
        if (pm.email_1) recipients.push(pm.email_1);
        if (pm.email_2) recipients.push(pm.email_2);
      });

      project?.members?.forEach(member => {
        if (member.email_1) recipients.push(member.email_1);
        if (member.email_2) recipients.push(member.email_2);
      });
    }

    if (result?.assigned_to) {
      if (result.assigned_to.email_1) recipients.push(result.assigned_to.email_1);
      if (result.assigned_to.email_2) recipients.push(result.assigned_to.email_2);
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
    console.error("[rfi.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;
      const entry = await strapi.db.query("api::rfi.rfi").findOne({
        where: { id: result.id },
        populate: { project: { populate: { project_managers: true, members: true } }, assigned_to: true },
      });

      if (entry) {
        await sendEmail("rfi-created", strapi, entry);
      }
    } catch (error) {
      console.error("[rfi.afterCreate]", error);
    }
  },
  async afterUpdate(event) {
    try {
      const { result } = event;
      const entry = await strapi.db.query("api::rfi.rfi").findOne({
        where: { id: result.id },
        populate: { project: { populate: { project_managers: true, members: true } }, assigned_to: true },
      });

      if (entry) {
        await sendEmail("rfi-updated", strapi, entry);
      }
    } catch (error) {
      console.error("[rfi.afterUpdate]", error);
    }
  },
};
