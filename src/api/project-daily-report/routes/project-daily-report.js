module.exports = {
  routes: [
    {
      method: "GET",
      path: "/project-daily-report/:projectId",
      handler: "project-daily-report.getReportData",
      config: {
        auth: false,
      },
    },
  ],
};
