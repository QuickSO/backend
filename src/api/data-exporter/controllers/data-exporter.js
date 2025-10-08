module.exports = ({ strapi }) => ({
  async exportGanttData(ctx) {
    try {
      const { projectId = -1 } = ctx?.request?.params;
      const tasks = await strapi.db.query("api::task.task").findMany({
        where: {
          is_deleted: false,
          project: projectId,
        },
        populate: true,
      });

      const data = tasks?.map((record) => ({
        type: record?.type,
        milestone:record?.type === "Task"? record?.milestone?.name || "": record?.type === "Milestone"? record?.name || "": "",
        project_no: record?.project?.no,
        name: record?.name,
        description: record?.description,
        start_date: record?.start_date,
        end_date: record?.end_date,
        estimated_budget: record?.estimated_budget,
        sanctioned_budget: record?.sanctioned_budget,
        status: record?.status,
        dependencies: record?.dependencies?.map((item) => item?.name)?.filter((name) => name && name.trim() !== "")?.join(", "),
        assignees: record?.assignees?.map((item) => `${item?.first_name || ""} ${item?.last_name || ""}`.trim())?.join(", "),
      }));

      if (tasks?.length > 0) {
        return (ctx.body = {
          success: true,
          message: "Export gantt data successfully!",
          data,
        });
      } else {
        return (ctx.body = {
          success: false,
          message: "There is no data to export!",
        });
      }
    } catch (error) {
      return (ctx.body = {
        success: false,
        message: "Failed to export gantt data!",
        error,
      });
    }
  },
});
