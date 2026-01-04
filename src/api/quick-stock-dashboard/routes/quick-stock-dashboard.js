module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quick-stock-dashboard/statistics",
      handler: "quick-stock-dashboard.getStatistics",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-stock-dashboard/performance-reviews",
      handler: "quick-stock-dashboard.getPerformanceReviews",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-stock-dashboard/material-procurement",
      handler: "quick-stock-dashboard.getMaterialProcurement",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-stock-dashboard/perfect-orders",
      handler: "quick-stock-dashboard.getPerfectOrders",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-stock-dashboard/average-inventory",
      handler: "quick-stock-dashboard.getAverageInventory",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-stock-dashboard/stocks-out",
      handler: "quick-stock-dashboard.getStocksOut",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quick-stock-dashboard/phase-completion",
      handler: "quick-stock-dashboard.getPhaseCompletion",
      config: {
        auth: false,
      },
    },
  ],
};
