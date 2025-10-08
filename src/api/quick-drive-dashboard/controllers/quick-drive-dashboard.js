const moment = require("moment");
const _ = require("lodash");

module.exports = ({ strapi }) => ({
  async getStatistics(ctx) {
    try {
      const data = {
        total_files: 0,
        total_folders: 0,
        monthly_unused_space: 0,
        monthly_used_space: 0,
        monthly_maximum_space: 0,
        used_space: 0,
      };

      let appSettings = await strapi.db
        .query("api::application-setting.application-setting")
        .findOne({});

      let fileItems = await strapi.db
        .query("api::file-item.file-item")
        .findMany({
          populate: ["attachment"],
          where: {
            is_deleted: false,
          },
        });

      fileItems = fileItems.map((fileItem) => {
        return {
          ...fileItem,
          created_month: moment(fileItem?.createdAt?.split("T")?.[0])?.format(
            "MM-YYYY"
          ),
        };
      });

      const groups = _.groupBy(fileItems, "created_month");

      data["total_files"] =
        fileItems?.filter((item) => item?.item_type === "File")?.length || 0;

      data["total_folders"] =
        fileItems?.filter((item) => item?.item_type === "Folder")?.length || 0;

      data["monthly_used_space"] =
        groups[moment().format("MM-YYYY")]?.reduce(function (acc, obj) {
          let fileSize = obj?.attachment?.size || 0;
          return acc + fileSize;
        }, 0) || 0;

      data["monthly_maximum_space"] =
        appSettings?.monthly_maximum_storage_in_gb * 1024 * 1024 || 0;

      data["monthly_unused_space"] = Math.max(
        data["monthly_maximum_space"] - data["monthly_unused_space"],
        0
      );

      fileItems?.forEach((item) => {
        if (item?.attachment) {
          data["used_space"] += item?.attachment?.size || 0;
        }
      });

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
  async getMonthlyStorageAmountStatus(ctx) {
    try {
      let appSettings = await strapi.db
        .query("api::application-setting.application-setting")
        .findOne({});

      let fileItems = await strapi.db
        .query("api::file-item.file-item")
        .findMany({
          populate: ["attachment"],
          where: {
            is_deleted: false,
          },
        });

      fileItems = fileItems.map((fileItem) => {
        return {
          ...fileItem,
          created_month: moment(fileItem?.createdAt?.split("T")?.[0])?.format(
            "MM-YYYY"
          ),
        };
      });

      const groups = _.groupBy(fileItems, "created_month");

      let monthlyUsedSpace =
        groups[moment().format("MM-YYYY")]?.reduce(function (acc, obj) {
          let fileSize = obj?.attachment?.size || 0;
          return acc + fileSize;
        }, 0) || 0;

      let monthlyUnusedSpace = Math.max(
        appSettings?.monthly_maximum_storage_in_gb * 1024 * 1024 -
          monthlyUsedSpace,
        0
      );
      const data = [
        {
          status: "Used",
          value: monthlyUsedSpace,
        },
        {
          status: "Unused",
          value: monthlyUnusedSpace || 0,
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
});
