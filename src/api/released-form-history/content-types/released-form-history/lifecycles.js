module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      const history = await strapi.db
        .query("api::released-form-history.released-form-history")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: true,
        });

      const entry = await strapi.db
        .query("api::released-note.released-note")
        .findOne({
          where: {
            id: history?.released_note?.id,
          },
          populate: true,
        });

      if (entry) {
        const stockLedger = await strapi.db
          .query("api::stock-ledger.stock-ledger")
          .findOne({
            where: {
              id: entry?.stock_ledger,
            },
          });

        const currentQuantity = stockLedger?.quantity;

        await strapi.entityService.update(
          "api::stock-ledger.stock-ledger",
          stockLedger?.id,
          {
            data: {
              quantity: currentQuantity + result?.quantity,
            },
          }
        );
      }
    } catch (error) {
      console.log("[released-form-history.afterCreate]", error);
    }
  },
};
