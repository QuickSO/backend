module.exports = {
  routes: [
    {
      method: "POST",
      path: "/notifications/count/unread",
      handler: "notification.countUnreadNotifications",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/notifications/list",
      handler: "notification.getNotificationsList",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/notifications/details/:id",
      handler: "notification.getNotificationDetails",
      config: {
        auth: false,
      },
    },
  ],
};
