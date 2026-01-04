module.exports = {
  async afterUpdate(event) {
    const { result } = event;

    if (result?.status === "Approved") {
      const entry = await strapi.db
        .query("api::vendor-quotation.vendor-quotation")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: {
            project: true,
            vendor: true,
          },
        });

      const project = await strapi.db.query("api::project.project").findOne({
        where: {
          id: entry?.project?.id,
        },
        populate: {
          vendors: true,
        },
      });

      const vendors = project?.vendors?.map((item) => item?.id);

      await strapi.entityService.update("api::project.project", project?.id, {
        data: {
          vendors: [...vendors, entry?.vendor?.id],
        },
      });
    }
  },
};
