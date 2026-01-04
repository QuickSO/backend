const { isEmpty } = require("lodash");


const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    const addEmailsToRecipients = (array) => {
      if (Array.isArray(array) && array.length > 0) {
        array.forEach(item => {
          if (item?.email_1) {
            recipients.push(item.email_1);
          }
          if (item?.email_2) {
            recipients.push(item.email_2);
          }
        });
      }
    };
    
    const vendors = result?.vendors;
    const approved_by = result?.approved_by;
    const creation_employee = result?.creation_employee;
    
    addEmailsToRecipients(vendors);
    addEmailsToRecipients(approved_by);
    addEmailsToRecipients(creation_employee);

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
    console.log("[vendor-material-requisition.sendEmail]", error);
  }
};

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;
      const entry = await strapi.db.query("api::vendor-material-requisition.vendor-material-requisition").findOne({
        where: { id: result.id },
        populate: { vendors: true, project: true , vendor: true ,approved_by: true,creation_employee: true,},
      });

      if (entry) {
        await sendEmail("vendor-material-requisition-created", strapi, entry);
      }
    } catch (error) {
      console.error("[vendor-material-requisition.afterCreate]", error);
    }
  },
  
  async afterUpdate(event) {
    try {
      const { result } = event;
      const entry = await strapi.db.query("api::vendor-material-requisition.vendor-material-requisition").findOne({
        where: { id: result.id },
        populate: { vendors: true, project: true , vendor: true ,approved_by: true,creation_employee: true,},
      });

      if (entry) {
        await sendEmail("vendor-material-requisition-updated", strapi, entry);
      }
    } catch (error) {
      console.error("[vendor-material-requisition.afterUpdate]", error);
    }
  },
};
