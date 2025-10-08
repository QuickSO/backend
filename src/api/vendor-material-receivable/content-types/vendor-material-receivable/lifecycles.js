const { isEmpty } = require("lodash");

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      const entry = await strapi.db
        .query("api::vendor-material-receivable.vendor-material-receivable")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: true,
        });

      if (!isEmpty(entry)) {
        const existingStockLedger = await strapi.db
          .query("api::stock-ledger.stock-ledger")
          .findOne({
            where: {
              project: entry?.project?.id,
              // vendor: entry?.vendor?.id,
              material_item: entry?.material_item?.id,
              material_unit: entry?.material_unit?.id,
              // location: entry?.location?.id,
              source: "AUTO",
            },
          });

        const dataToSave = {
          project: entry?.project?.id,
          material_item: entry?.material_item?.id,
          material_unit: entry?.material_unit?.id,
          location: entry?.location?.id,
          quantity: entry?.received_quantity,
          remarks: `This entry is created with respective to the material receivable form no. ${entry?.id} submission.`,
          source: "AUTO",
          vendor_material_receivable: entry?.id,
          vendor: entry?.vendor?.id,
        };

        if (isEmpty(existingStockLedger)) {
          await strapi.entityService.create("api::stock-ledger.stock-ledger", {
            data: dataToSave,
          });
        } else {
          await strapi.entityService.update(
            "api::stock-ledger.stock-ledger",
            existingStockLedger?.id,
            {
              data: {
                ...existingStockLedger,
                ...dataToSave,
              },
            }
          );
        }
      }
    } catch (error) {
      console.log("Failed to create new stock ledger!");
    }
  },
};
