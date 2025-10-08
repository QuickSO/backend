module.exports = ({ strapi }) => ({
  async getAll(ctx, next) {
    try {
      const response = await strapi.db
        .query("plugin::users-permissions.user")
        .findMany({
          orderBy: { full_name: "asc" },
          limit: 999,
        });

      console.log("response=", response);

      if (response?.length > 0) {
        return (ctx.body = {
          success: true,
          data: response?.map((item) => ({
            id: item?.id,
            full_name: item?.full_name,
          })),
        });
      }

      throw new Error();
    } catch (error) {
      console.log(error);
      return (ctx.body = {
        success: false,
      });
    }
  },
});
