module.exports = {
  routes: [
    {
      method: "GET",
      path: "/reporter",
      handler: "reporter.getReportData",
      config: {
        auth: false,
      },
    },
  ],
};
