const { DATE_TIME_FORMAT } = require("../_constants");
const moment = require("moment");
const _ = require("lodash");

module.exports = ({ strapi }) => ({
  async getStatistics(ctx) {
    try {
      let sqis = [];
      let totalStockQuantity = 0;
      let totalCountedQuantity = 0;
      let totalInventoryCost = 0;

      const receivedNotes = await strapi.db
        .query(`api::vendor-received-note.vendor-received-note`)
        .findMany({
          populate: true,
          where: {
            is_deleted: false,
          },
        });

      const stockLedgers = await strapi.db
        .query(`api::stock-ledger.stock-ledger`)
        .findMany({
          populate: true,
          where: {
            is_deleted: false,
          },
        });

      const inventorySetting = await strapi.db
        .query(`api::inventory-setting.inventory-setting`)
        .findOne({});

      const vendorPurchaseOrders = await strapi
        .query(`api::vendor-quotation.vendor-quotation`)
        .findMany({
          where: {
            is_deleted: false,
            status: "Approved",
          },
        });

      vendorPurchaseOrders?.forEach((order) => {
        totalInventoryCost += order?.grand_total_amount;
      });

      const totalInventoryBaseCost =
        inventorySetting.service_cost +
        inventorySetting.risk_cost +
        inventorySetting.capital_cost +
        inventorySetting.storage_cost;

      receivedNotes?.forEach((receivedNote) => {
        let noteSqi = 0;

        noteSqi += receivedNote?.material_quality
          ? receivedNote.material_quality * 0.45
          : 0;
        noteSqi += receivedNote?.corrective_actions
          ? receivedNote.corrective_actions * 0.1
          : 0;
        noteSqi += receivedNote?.prompt_reply
          ? receivedNote.prompt_reply * 0.1
          : 0;
        noteSqi += receivedNote?.delivery_quality
          ? receivedNote.delivery_quality * 0.2
          : 0;
        noteSqi += receivedNote?.quality_systems
          ? receivedNote.quality_systems * 0.05
          : 0;
        noteSqi += receivedNote?.commercial_posture
          ? receivedNote.commercial_posture * 0.1
          : 0;

        sqis.push(noteSqi);
      });

      stockLedgers?.forEach((stockLedger) => {
        totalStockQuantity += stockLedger?.quantity;
        totalCountedQuantity += stockLedger?.physically_counted_quantity;
      });

      const perfectOrderRates = await this.calcAvgPerfectOrderRates();

      const data = [
        {
          name: "Supplier Quality Index",
          value: Math.round(_.mean(sqis), 2) || 0,
        },
        {
          name: "Perfect Order Rates",
          value: perfectOrderRates,
        },
        {
          name: "Inventory Shrinkage",
          value: totalStockQuantity - totalCountedQuantity,
        },
        {
          name: "Inventory Carrying Cost",
          value:
            Math.round((totalInventoryBaseCost * 100) / totalInventoryCost) ||
            0,
        },
      ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getPerformanceReviews(ctx) {
    try {
      let total = 0;
      let complete = 0;
      let incomplete = 0;

      const dailyReports = await strapi.db
        .query(`api::daily-report.daily-report`)
        .findMany({
          populate: true,
          where: {
            is_deleted: false,
            createdAt: {
              $gte: moment()?.startOf("day")?.format(DATE_TIME_FORMAT),
            },
          },
        });

      if (dailyReports?.length > 0) {
        dailyReports?.forEach((dailyReport) => {
          dailyReport?.tasks?.forEach((task) => {
            total += 1;

            if (task?.completed === true) {
              complete += 1;
            } else {
              incomplete += 1;
            }
          });
        });
      }

      const data = [
        {
          type: "Complete",
          value: Math.round((complete / total) * 100) || 0,
        },
        {
          type: "Incomplete",
          value: Math.round((incomplete / total) * 100) || 0,
        },
      ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getMaterialProcurement(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;
      const data = {
        percent: 0.75,
      };

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getPerfectOrderRates(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;
      const data = [
        {
          date: "01-01-2022",
          value: 0,
        },
        {
          date: "02-01-2022",
          value: 0,
        },
        {
          date: "03-01-2022",
          value: 0,
        },
      ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async calcAverageInventory(data) {
    // Create a dictionary to store inventory levels for each date
    const inventoryLevels = {};

    // Iterate through the data and calculate inventory levels for each date
    data.forEach((entry) => {
      const { date, quantity } = entry;

      // Check if the date exists in the inventoryLevels dictionary
      if (!inventoryLevels[date]) {
        // If it doesn't exist, create an entry with an empty array
        inventoryLevels[date] = [];
      }

      // Push the quantity to the inventoryLevels array for the corresponding date
      inventoryLevels[date].push(quantity);
    });

    // Calculate the average inventory for all material items combined for each day
    const averageInventory = {};

    Object.keys(inventoryLevels).forEach((date) => {
      const quantities = inventoryLevels[date];
      const sum = quantities.reduce(
        (total, quantity) => Number(total) + Number(quantity),
        0,
      );
      const average = sum / quantities.length;
      averageInventory[date] = average;
    });

    let output = [];

    Object.keys(averageInventory)?.forEach((key) => {
      output.push({
        date: key,
        value: averageInventory?.[key],
      });
    });

    return output;
  },
  async getAverageInventory(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;

      // const data = [
      //   {
      //     date: "01-2022",
      //     value: 0,
      //   },
      //   {
      //     date: "02-2022",
      //     value: 0,
      //   },
      //   {
      //     date: "03-2022",
      //     value: 0,
      //   },
      // ];

      const weekStartDate = moment()?.startOf("week");
      const weekEndDate = moment()?.endOf("week");

      let dates = [];
      let currentDate = weekStartDate.clone();

      while (currentDate.isSameOrBefore(weekEndDate, "day")) {
        dates.push(currentDate.clone());
        currentDate.add(1, "days");
      }

      const promises = dates?.map(async (date) => {
        try {
          const responses = await strapi.db
            .query("api::stock-ledgers-log.stock-ledgers-log")
            .findMany({
              where: {
                date: date?.format(),
              },
            });

          return responses?.map((item) => ({
            date: date?.format("DD-MM-YYYY"),
            material_item_id: Number(item?.material_item_id),
            quantity: Number(item?.quantity),
          }));
        } catch (error) {
          return [];
        }
      });

      let results = await Promise.all(promises);
      results = _.flatten(results);

      const data = await this.calcAverageInventory(results);

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      console.log("[getAverageInventory]", error);

      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getStocksOutForSingleDate(inputDate) {
    try {
      const response = await strapi.db
        .query("api::stock-ledgers-log.stock-ledgers-log")
        .findMany({
          where: {
            date: inputDate?.format(),
            quantity: 0,
          },
        });

      return {
        date: inputDate?.format("DD-MM-YYYY"),
        count: response?.length,
      };
    } catch (error) {
      console.log("[quick-stock-dashboard.getStocksOutForSingleDate]", error);

      return {
        date: inputDate?.format("DD-MM-YYYY"),
        count: 0,
      };
    }
  },
  async getStocksOut(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;

      const weekStartDate = moment()?.startOf("week");
      const weekEndDate = moment()?.endOf("week");

      let dates = [];
      let currentDate = weekStartDate.clone();

      while (currentDate.isSameOrBefore(weekEndDate, "day")) {
        dates.push(currentDate.clone());
        currentDate.add(1, "days");
      }

      const promises = dates?.map((date) =>
        this.getStocksOutForSingleDate(date),
      );

      const results = await Promise.all(promises);
      const data = results?.map((record) => ({
        time: record?.date,
        category: "Out of Stock",
        value: record?.count,
      }));

      // const data = [
      //   {
      //     time: "01-2022",
      //     category: "Cost Escalation",
      //     value: 0,
      //   },
      //   {
      //     time: "01-2022",
      //     category: "Out of Stock",
      //     value: 0,
      //   },
      // ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      console.log("[quick-stock-dashboard.getStocksOut]", error);

      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async getPhaseCompletion(ctx) {
    try {
      let milestoneStats = {
        Pending: 0,
        Active: 0,
        Completed: 0,
        "On Hold": 0,
      };
      let taskStats = {
        Pending: 0,
        Active: 0,
        Completed: 0,
        "On Hold": 0,
      };

      const tasks = await strapi.db.query(`api::task.task`).findMany({
        populate: true,
        where: {
          is_deleted: false,
        },
      });

      tasks?.forEach((taskItem) => {
        if (taskItem?.type === "Milestone") {
          milestoneStats[taskItem?.status] += 1;

          tasks
            ?.filter(
              (item) => item?.parent === taskItem?.id && item?.type === "Task",
            )
            ?.forEach((item) => {
              taskStats[item?.status] += 1;
            });
        }
      });

      const data = [
        {
          data: Object.keys(milestoneStats)?.map((key) => ({
            type: key,
            value: milestoneStats[key],
          })),
        },
        {
          data: Object.keys(taskStats)?.map((key) => ({
            type: key,
            value: taskStats[key],
          })),
        },
      ];

      return (ctx.body = {
        success: true,
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
  async calcAvgPerfectOrderRates(
    projectId = -1,
    startDate = null,
    endDate = null,
  ) {
    try {
      let receivedOrders = await strapi.db
        .query("api::vendor-material-receivable.vendor-material-receivable")
        .findMany({
          where: {},
          populate: {
            purchase_order: true,
          },
        });

      let perfectOrders = receivedOrders?.map(
        (record) =>
          moment(record?.purchase_order?.scheduled_date)?.format(
            "YYYY-MM-DD",
          ) === moment(record?.received_date)?.format("YYYY-MM-DD") &&
          record?.return_replace_quantity === 0,
      );

      return (perfectOrders?.length / receivedOrders?.length) * 100;
    } catch (error) {
      console.log("[calcAvgPerfectOrderRates", error);

      return 0;
    }
  },
  async getPerfectOrders(ctx) {
    try {
      const {
        project_id = -1,
        start_date = null,
        end_date = null,
      } = ctx?.request?.query;

      let filters = {};

      if (start_date !== null && end_date !== null) {
        filters["purchase_order"] = {
          createdAt: {
            $gte: start_date,
            $lte: end_date,
          },
        };
      }

      if (Number(project_id) > -1) {
        filters["project"] = {
          id: Number(project_id),
        };
      }

      let receivedOrders = await strapi.db
        .query("api::vendor-material-receivable.vendor-material-receivable")
        .findMany({
          where: filters,
          populate: {
            purchase_order: true,
            project: true,
          },
        });

      let perfectOrders = [];

      receivedOrders = receivedOrders?.map((record) => {
        let newRecord = {
          purchase_order_id: record?.purchase_order?.id,
          order_date: record?.order_date,
          delivery_date: record?.purchase_order?.scheduled_date,
          received_date: record?.received_date,
          returning: record?.return_replace_quantity || 0,
          is_perfect:
            moment(record?.purchase_order?.scheduled_date)?.format(
              "YYYY-MM-DD",
            ) === moment(record?.received_date)?.format("YYYY-MM-DD") &&
            record?.return_replace_quantity === 0,
          formatted_order_date: moment(record?.order_date)?.format(
            "DD-MM-YYYY",
          ),
        };

        if (newRecord?.is_perfect) {
          perfectOrders.push(newRecord);
        }

        return newRecord;
      });

      // let orders = await strapi.db
      //   .query("api::vendor-purchase-order.vendor-purchase-order")
      //   .findMany({});

      // orders = orders?.map((order) => ({
      //   order_id: order?.id,
      //   scheduled_date: order?.scheduled_date,
      // }));

      const averageRates =
        (perfectOrders?.length / receivedOrders?.length) * 100;

      const groups = _.groupBy(receivedOrders, "formatted_order_date");

      let chartData = [];

      Object.keys(groups)?.forEach((dateString) => {
        chartData.push({
          date: dateString,
          value: groups?.[dateString]?.length || 0,
        });
      });

      return (ctx.body = {
        success: true,
        // data: {
        //   stats: averageRates,
        //   chart_data: chartData,
        // },
        data: chartData,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error?.message,
      });
    }
  },
});
