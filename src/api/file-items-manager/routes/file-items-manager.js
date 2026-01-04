module.exports = {
  routes: [
    {
      method: "POST",
      path: "/file-items-manager/files",
      handler: "file-items-manager.getFiles",
      config: {
        auth: false,
      },
    },
  ],
};
