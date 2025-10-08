module.exports = {
  routes: [
    {
      method: "POST",
      path: "/app-auth/login",
      handler: "app-auth.login",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/app-auth/log-out",
      handler: "app-auth.logOut",
      config: {
        auth: false,
      },
    },
  ],
};
