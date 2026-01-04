module.exports = {
  async afterUpdate(event) {
    const { result } = event;

    if (result?.status === "Approved") {
      const entry = await strapi.db
        .query("api::sub-contractor-quotation.sub-contractor-quotation")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: {
            project: true,
            sub_contractor: true,
          },
        });

      const project = await strapi.db.query("api::project.project").findOne({
        where: {
          id: entry?.project?.id,
        },
        populate: {
          sub_contractors: true,
        },
      });

      const subContractors = project?.sub_contractors?.map((item) => item?.id);

      await strapi.entityService.update("api::project.project", project?.id, {
        data: {
          sub_contractors: [...subContractors, entry?.sub_contractor?.id],
        },
      });
    }
  },
};
