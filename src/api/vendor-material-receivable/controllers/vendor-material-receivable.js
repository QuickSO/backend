const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vendor-material-receivable.vendor-material-receivable', ({ strapi }) => ({
  async find(ctx) {
    // Call the default core action
    const { data, meta } = await super.find(ctx);

    // Populate material_item and its relations
    const populatedData = await Promise.all(
      data.map(async (receivable) => {
        const materialItem = await strapi.entityService.findOne(
          'api::material-item.material-item',
          receivable.attributes.material_item.data.id,
          {
            populate: {
              creator: true,
              material_group: true,
              material_unit: true,
              material_brand: true,
            },
          }
        );

        return {
          ...receivable,
          attributes: {
            ...receivable.attributes,
            material_item: materialItem,
          },
        };
      })
    );

    return { data: populatedData, meta };
  },

  async findOne(ctx) {
    // Call the default core action
    const { data } = await super.findOne(ctx);

    if (data.attributes.material_item.data) {
      // Populate material_item and its relations
      const materialItem = await strapi.entityService.findOne(
        'api::material-item.material-item',
        data.attributes.material_item.data.id,
        {
          populate: {
            creator: true,
            material_group: true,
            material_unit: true,
            material_brand: true,
          },
        }
      );

      data.attributes.material_item = materialItem;
    }

    return { data };
  },
}));
