module.exports = {
  async afterCreate(event) {
    const { data } = event.params;
    const notiData = data?.data?.data;
    const notiTemplate = data?.data?.template;

    switch (notiTemplate) {
      case "PROJECT_CREATION":
        await strapi
          .service("api::notification-queue.notification-queue")
          .onProjectCreation(notiData);
    }
  },
};
