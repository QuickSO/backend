const imageToBase64 = require("image-to-base64");

module.exports = ({ strapi }) => ({
  async convertImageToBase64(ctx) {
    try {
      const { file_name } = ctx?.request?.query;
      const response = await imageToBase64(`public/uploads/${file_name}`);

      return (ctx.body = {
        success: true,
        message: "Convert image successfully!",
        data: `data:image/png;base64,${response}`,
      });
    } catch (error) {
      console.log("error", error);
      return (ctx.body = {
        success: false,
        message: "Convert image unsuccessfully!",
      });
    }
  },
});
