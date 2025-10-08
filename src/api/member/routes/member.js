module.exports = {
  routes: [
    {
      method: "GET",
      path: "/members/all",
      handler: "member.getAll",
      config: {
        auth: false,
      },
    },
  ],
};
