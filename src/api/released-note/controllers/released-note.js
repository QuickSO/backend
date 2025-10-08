"use strict";

/**
 *  released-note controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { isEmpty } = require("lodash");

module.exports = createCoreController(
  "api::released-note.released-note",
  ({ strapi }) => ({
    async find(ctx) {
      let { data, meta } = await super.find(ctx);

      const projects = await strapi.db.query("api::project.project").findMany({
        select: ["id", "name"],
      });

      const tasks = await strapi.db.query("api::task.task").findMany({
        select: ["id", "name"],
      });

      const taskMaterials = await strapi.db
        .query("api::task-material.task-material")
        .findMany({
          populate: true,
        });

      const histories = await strapi.db
        .query("api::released-form-history.released-form-history")
        .findMany({
          where: {
            released_note: {
              id: {
                $in: data?.map((record) => record?.id),
              },
            },
          },
          populate: true,
        });

      data = data?.map((item) => {
        const project = projects?.find(
          (project) => project?.id === item?.attributes?.project
        );
        const task = tasks?.find((task) => task?.id === item?.attributes?.task);
        const taskMaterial = taskMaterials?.find(
          (taskMaterial) => taskMaterial?.id === item?.attributes?.task_material
        );

        item["attributes"] = {
          ...item?.attributes,
          project: project?.name ?? "N/A",
          task: task?.name ?? "N/A",
          task_material: taskMaterial
            ? `${taskMaterial?.material_item?.name} (${taskMaterial?.material_unit?.name})`
            : "N/A",
          released_quantity:
            histories
              ?.filter((record) => record?.released_note?.id === item?.id)
              ?.reduce((acc, record) => acc + record?.quantity, 0) || 0,
        };

        return item;
      });

      return {
        data,
        meta,
      };
    },
    async findOne(ctx) {
      let { data, meta } = await super.findOne(ctx);

      const histories = await strapi.db
        .query("api::released-form-history.released-form-history")
        .findMany({
          where: {
            released_note: {
              id: data?.id,
            },
          },
          populate: true,
        });

      const releasedQuantity =
        histories?.reduce((acc, record) => acc + record?.quantity, 0) || 0;

      data["attributes"]["released_quantity"] = releasedQuantity;
      data["attributes"]["releasable_quantity"] =
        data?.attributes?.required_quantity - releasedQuantity;

      return {
        data,
        meta,
      };
    },
  })
);
