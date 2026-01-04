module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      const entry = await strapi.db
        .query("api::released-note.released-note")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: true,
        });

      const stockLedgerEntry = await strapi.db
        .query("api::stock-ledger.stock-ledger")
        .findOne({
          where: {
            id: entry?.stock_ledger,
          },
        });

      const requiredQuantity = entry?.required_quantity;
      const inStockQuantity = stockLedgerEntry?.quantity || 0;

      // const task = await strapi.db.query("api::task.task").findOne({
      //   where: {
      //     id: entry?.task,
      //   },
      //   populate: true,
      // });

      // const taskMaterial = await strapi.db
      //   .query("api::task-material.task-material")
      //   .findOne({
      //     where: {
      //       id: entry?.task_material,
      //     },
      //     populate: true,
      //   });

      // const stockLedger = await strapi.db
      //   .query("api::stock-ledger.stock-ledger")
      //   .findOne({
      //     where: {
      //       id: entry?.stock_ledger,
      //     },
      //     populate: true
      //   });

      if (requiredQuantity <= inStockQuantity) {
        await strapi.entityService.update(
          "api::released-note.released-note",
          entry?.id,
          {
            data: {
              quantity: requiredQuantity,
              // released_quantity: requiredQuantity,
            },
          }
        );

        // await strapi.entityService.update(
        //   "api::task-material.task-material",
        //   entry?.task_material,
        //   {
        //     data: {
        //       status: "Done",
        //     },
        //   }
        // );

        await strapi.entityService.update(
          "api::stock-ledger.stock-ledger",
          entry?.stock_ledger,
          {
            data: {
              quantity: inStockQuantity - requiredQuantity,
            },
          }
        );
      } else {
        await strapi.entityService.update(
          "api::released-note.released-note",
          entry?.id,
          {
            data: {
              quantity: inStockQuantity,
              // released_quantity: inStockQuantity,
            },
          }
        );

        // await strapi.entityService.update(
        //   "api::task-material.task-material",
        //   entry?.task_material,
        //   {
        //     data: {
        //       released_quantity: inStockQuantity,
        //       status: "Done",
        //     },
        //   }
        // );

        // await strapi.entityService.create("api::task-material.task-material", {
        //   data: {
        //     task: entry?.task,
        //     material_group: taskMaterial?.material_group?.id,
        //     material_item: taskMaterial?.material_item?.id,
        //     material_unit: taskMaterial?.material_unit?.id,
        //     employee: taskMaterial?.employee?.id,
        //     quantity: requiredQuantity - inStockQuantity,
        //     remarks: `${
        //       requiredQuantity - inStockQuantity
        //     } extra items is waiting for approval`,
        //   },
        // });

        await strapi.entityService.update(
          "api::stock-ledger.stock-ledger",
          entry?.stock_ledger,
          {
            data: {
              quantity: 0,
            },
          }
        );
      }
    } catch (error) {
      console.log("[released-note.afterCreate]", error);
    }
  },
  async afterUpdate(result) {
    try {
      const { result } = event;

      const entry = await strapi.db
        .query("api::released-note.released-note")
        .findOne({
          where: {
            id: result?.id,
          },
          populate: true,
        });

      const histories = entry?.released_histories || [];

      // Check if histories have any unprocessed items
      const unprocessedItems =
        histories?.filter((item) => item?.processed === false)?.length || 0;

      if (unprocessedItems === 0) {
        return;
      }

      let totalReleasedAmount = 0;
      let newHistories = [];

      histories?.forEach((record) => {
        if (record?.processed === false) {
          totalReleasedAmount += record?.quantity;
        }

        newHistories.push({
          ...record,
          processed: true,
        });
      });

      const stockLedgerEntry = await strapi.db
        .query("api::stock-ledger.stock-ledger")
        .findOne({
          where: {
            id: entry?.stock_ledger,
          },
        });
      const requiredQuantity = entry?.required_quantity;
      const inStockQuantity = stockLedgerEntry?.quantity || 0;

      await strapi.entityService.update(
        "api::stock-ledger.stock-ledger",
        entry?.stock_ledger,
        {
          data: {
            quantity: inStockQuantity - requiredQuantity,
          },
        }
      );

      await strapi.entityService.update(
        "api::released-note.released-note",
        entry?.id,
        {
          data: {
            released_histories: newHistories,
          },
        }
      );
    } catch (error) {
      console.log("[released-note.afterUpdate]", error);
    }
  },
};
