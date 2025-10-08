module.exports = {
  async afterUpdate(event) {
    const { result } = event;

    if (result?.status === "Approved") {
      const entry = await strapi.db
        .query("api::agency-quotation.agency-quotation")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: {
            project: true,
            agency: true,
          },
        });

      const project = await strapi.db.query("api::project.project").findOne({
        where: {
          id: entry?.project?.id,
        },
        populate: {
          agencies: true,
        },
      });

      const agencies = project?.agencies?.map((item) => item?.id);

      await strapi.entityService.update("api::project.project", project?.id, {
        data: {
          agencies: [...agencies, entry?.agency?.id],
        },
      });
    }
  },
};
