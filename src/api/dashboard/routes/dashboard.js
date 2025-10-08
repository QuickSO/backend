// https://docs.strapi.io/developer-docs/latest/development/backend-customization/routes.html#public-routes

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/dashboard/getQuickStockNumbers",
      handler: "dashboard.getQuickStockNumbers",
      config: {
        auth: false,
      },
    },
  ],
};
