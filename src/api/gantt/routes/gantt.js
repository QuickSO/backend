module.exports = {
  routes: [
    {
      method: "GET",
      path: "/gantt/projects/:id",
      handler: "gantt.getByProjectId",
      config: {
        auth: false,
      },
    },
  ],
};
