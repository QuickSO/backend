const { io } = require("../socket");
const Mustache = require("mustache");

const sendNotification = async (
  strapi,
  notificationId,
  templateKey,
  templateData
) => {
  try {
    const template = await strapi.db
      .query("api::notification-template.notification-template")
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

    io.emit(notificationId, {
      title,
      content,
    });

    console.log(
      "[notification.helper.js] SUCCESS: Send notification successfully!"
    );
  } catch (error) {
    console.log(
      "[notification.helper.js] ERROR: ",
      error?.message ?? "Failed to send notification"
    );
  }
};

module.exports = {
  sendNotification,
};
