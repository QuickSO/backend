module.exports = {
  routes: [
    {
      method: "GET",
      path: "/data-exporter/gantt/:projectId",
      handler: "data-exporter.exportGanttData",
      config: {
        auth: false,
      },
    },
  ],
};
