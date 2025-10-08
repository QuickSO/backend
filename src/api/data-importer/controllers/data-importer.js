module.exports = ({ strapi }) => ({
  async importGanttTasks(ctx) {
    try {
      const {
        data: { data, project_id },
      } = ctx?.request?.body;

      let employees = await strapi.db.query("api::employee.employee").findMany({
        where: {
          is_deleted: false,
        },
      });

      let tasks = await strapi.db.query("api::task.task").findMany({
        where: {
          is_deleted: false,
        },
      });

      for (let i = 0; i < data?.length; i++) {
        const record = data?.[i];

        await strapi.entityService.create("api::task.task", {
          data: {
            no: record?.no,
            name: record?.name,
            project: project_id,
            milestone:
              tasks?.find((item) => data?.[i]?.milestone === item?.no)?.id ||
              null,
            start_date: record?.start_date || null,
            end_date: record?.end_date || null,
            estimated_budget: record?.estimated_budget,
            sanctioned_budget: record?.sanctioned_budget,
            status: record?.status,
            type: record?.type,
            description: record?.description,
            assignees:
              employees
                ?.filter((item) => data?.[i]?.assignees?.includes(item?.no))
                ?.map((item) => item?.id) || null,
            dependencies:
              tasks
                ?.filter((item) => data?.[i]?.dependencies?.includes(item?.no))
                ?.map((item) => item?.id) || null,
          },
        });
      }

      if (data?.length > 0) {
        return (ctx.body = {
          success: true,
          message: "Import gantt tasks successfully!",
        });
      } else {
        return (ctx.body = {
          success: false,
          message: "There is no tasks to import!",
        });
      }
    } catch (error) {
      return (ctx.body = {
        success: false,
        message: "Failed to import gantt tasks!",
        error,
      });
    }
  },
});
