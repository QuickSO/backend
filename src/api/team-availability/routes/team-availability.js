module.exports = {
  routes: [
    {
      method: "GET",
      path: "/team-availability",
      handler: "team-availability.getAll",
      config: {
        auth: false,
      },
    },
  ],
};
