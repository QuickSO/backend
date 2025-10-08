module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quick-drive/module-stats",
      handler: "quick-drive.getModuleStats",
      config: {
        auth: false,
      },
    },
  ],
};
