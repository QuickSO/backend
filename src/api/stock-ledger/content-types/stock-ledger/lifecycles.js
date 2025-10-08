const sendEmail = async (templateId, strapi, result) => {
  try {
    let recipients = [];

    // let appUsers = await strapi.db.query("api::app-user.app-user").findMany({
    //   where: {
    //     is_admin: true,
    //   },
    // });

    // const appUserUids = appUsers?.map((appUser) => appUser?.uid);

    // const employees = await strapi.db.query("api::employee.employee").findMany({
    //   where: {
    //     uid: {
    //       $in: appUserUids,
    //     },
    //   },
    // });

    // if (employees.length > 0) {
    //   employees.forEach((employee) => {
    //     if (employee?.email_1) {
    //       recipients.push(employee.email_1);
    //     }

    //     if (employee?.email_2) {
    //       recipients.push(employee.email_2);
    //     }
    //   });
    // }

    const taskMaterials = await strapi.db.query("api::task-material").findMany({
      where: {
        material_item: result.material_item?.id,
      },
      populate: {
        task: {
          populate: {
            project: {
              populate: true,
            },
          },
        },
      },
    });

    if (taskMaterials?.length > 0) {
      let projectManagers = null;

      taskMaterials?.forEach((taskMaterial) => {
        projectManagers = taskMaterial?.task?.project?.project_managers ?? [];

        if (projectManagers?.length > 0) {
          projectManagers.forEach((employee) => {
            if (employee?.email_1) {
              recipients.push(employee.email_1);
            }
            if (employee?.email_2) {
              recipients.push(employee.email_2);
            }
          });
        }
      });
    }

    if (recipients?.length > 0) {
      await strapi.entityService.create("api::email-queue.email-queue", {
        data: {
          template: templateId,
          data: result,
          recipients,
        },
      });
    }
  } catch (error) {
    console.log("stock-ledger:send-email", error);
  }
};

module.exports = {
  afterUpdate(event) {
    const { result } = event;

    const emailContent = {
      ...result,
      material_item_name: result?.material_item?.name,
      material_item_description: result?.material_item?.description,
    };

    if (result.physically_counted_quantity === 0 || result.quantity === 0) {
      sendEmail("out-of-stock", strapi, emailContent);
    } else {
      sendEmail("stock-updated", strapi, emailContent);
    }
  },
};
