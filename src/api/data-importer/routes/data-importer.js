module.exports = {
  routes: [
    {
      method: "POST",
      path: "/data-importer/gantt-tasks",
      handler: "data-importer.importGanttTasks",
      config: {
        auth: false,
      },
    },
  ],
};
