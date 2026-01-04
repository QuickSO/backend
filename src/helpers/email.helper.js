const Mustache = require("mustache");

const sendEmail = async (
  strapi,
  templateKey,
  templateData,
  toRecipients = [],
  ccRecipients = [],
  bccRecipients = []
) => {
  try {
    const template = await strapi.db
      .query("api::email-template.email-template")
      .findOne({
        where: {
          key: templateKey,
          is_deleted: false,
        },
      });

    if (isEmpty(template)) {
      throw new Error("Template not found for key =", key);
    }

    const title = Mustache.render(templateData?.title, data);
    const content = Mustache.render(templateData?.body, data);

    await strapi
      .plugin("email")
      .service("email")
      .send({
        to: toRecipients.join(","),
        cc: ccRecipients.join(","),
        bcc: bccRecipients.join(","),
        from: process.env.EMAIL_SENDER,
        subject: title,
        html: content,
      });

    console.log("[email.helper.js] SUCCESS: Send email successfully!");
  } catch (error) {
    console.log(
      "[email.helper.js] ERROR: ",
      error?.message ?? "Failed to send email"
    );
  }
};

module.exports = {
  sendEmail,
};
