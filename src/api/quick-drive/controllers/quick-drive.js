const moment = require("moment");
const _ = require("lodash");

module.exports = ({ strapi }) => ({
  async getModuleStats(ctx) {
    try {
      const { module_name = "" } = ctx?.request?.query;
      const data = {
        total_files: 0,
        total_folders: 0,
        used_space: 0,
        monthly_usage: 0,
      };

      const queryObject = {
        is_deleted: false,
      };

      if (module_name !== "") {
        queryObject["module_name"] = module_name;
      }

      let fileItems = await strapi.db
        .query("api::file-item.file-item")
        .findMany({
          populate: ["attachment"],
          where: queryObject,
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

      data["monthly_usage"] =
        groups[moment().format("MM-YYYY")]?.reduce(function (acc, obj) {
          let fileSize = obj?.attachment?.size || 0;
          return acc + fileSize;
        }, 0) || 0;

      fileItems?.forEach((item) => {
        if (item?.attachment) {
          data["used_space"] += item?.attachment?.size || 0;
        }
      });

      return (ctx.body = {
        success: true,
        message: "Get module stats successfully!",
        data,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        message: "Get module stats unsuccessfully!",
      });
    }
  },
});
