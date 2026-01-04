module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quick-drive-dashboard/statistics",
      handler: "quick-drive-dashboard.getStatistics",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-drive-dashboard/monthly-storage-amount-status",
      handler: "quick-drive-dashboard.getMonthlyStorageAmountStatus",
      config: {
        auth: false,
      },
    },
  ],
};
