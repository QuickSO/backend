module.exports = {
  routes: [
    {
      method: "GET",
      path: "/utils/image-to-base64",
      handler: "utils.convertImageToBase64",
      config: {
        auth: false,
      },
    },
  ],
};
