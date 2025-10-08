const sendEmail = async (templateId, strapi, result) => {
  let recipients = [];

  if (result?.employee) {
    if (result.employee?.email_1) {
      recipients.push(result.employee.email_1);
    }

    if (result.employee?.email_2) {
      recipients.push(result.employee.email_2);
    }

    await strapi.entityService.create("api::email-queue.email-queue", {
      data: {
        template: templateId,
        data: result,
        recipients,
      },
    });
  }
};

module.exports = {
  sendEmail,
};
