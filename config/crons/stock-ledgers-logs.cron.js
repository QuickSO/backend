const moment = require("../../src/setup/moment");

async function execute(strapi) {
  try {
    const today = moment()?.format();

    const currentTime = moment();
    const isAroundMidnight =
      currentTime.hours() === 23 &&
      currentTime.minutes() >= 50 &&
      currentTime.minutes() <= 59;

    if (!isAroundMidnight) {
      return;
    }

    console.log(
      "[crons/stock-ledgers.cron] INFO: Executing stock ledgers logs cron job...",
    );

    const entries = await strapi.db
      .query("api::stock-ledger.stock-ledger")
      .findMany({
        populate: true,
      });

    if (entries?.length === 0) {
      return;
    }

    let endDateQuantity = {};

    entries?.forEach((entry) => {
      endDateQuantity[entry?.material_item?.id?.toString()] =
        entry?.quantity || 0;
    });

    await strapi.db
      .query("api::stock-ledgers-log.stock-ledgers-log")
      .createMany({
        data: Object.keys(endDateQuantity)?.map((key) => ({
          date: today,
          material_item: Number(key),
          material_item_id: Number(key),
          quantity: Number(endDateQuantity?.[key]),
        })),
      });

    console.log(
      "[crons/stock-ledgers.cron] INFO: Finished executing stock ledgers logs cron job",
    );
    return;
  } catch (error) {
    console.log("[crons/stock-ledgers.cron] ERROR", error);
  }
}

module.exports = {
  execute,
};
