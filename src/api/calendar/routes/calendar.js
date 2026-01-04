module.exports = {
  routes: [
    {
      method: "GET",
      path: "/calendar",
      handler: "calendar.index",
      config: {
        auth: false,
      },
    },
  ],
};
