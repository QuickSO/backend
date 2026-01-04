"use strict";
const { initSocket } = require("./socket");

const setAsDeleted = async (strapi, modelName, uid) => {
  await strapi.db.query(modelName).update({
    where: {
      uid,
    },
    data: {
      is_deleted: true,
    },
  });
};

const deleteItem = async (strapi, modelName, uid) => {
  await strapi.db.query(modelName).delete({
    where: {
      uid,
    },
  });
};

const sendEmail = async (templateId, strapi, result) => {
  let recipients = [];

  if (result?.employee) {
    if (result.employee?.email_1) {
      recipients.push(result.employee.email_1);
    }

    if (result.employee?.email_2) {
      recipients.push(result.employee.email_2);
    }

    await strapi.entityService.create("api::email-queue.email-queue", {
      data: {
        template: templateId,
        data: result,
        recipients,
      },
    });
  }
};

function formatString(inputString) {
  // Replace hyphens with spaces
  let replacedString = inputString.replace(/-/g, " ");

  // Split the string into an array of words
  let words = replacedString.split(" ");

  // Capitalize the first letter of each word
  let formattedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the formatted words back into a single string
  let formattedString = formattedWords.join(" ");

  return formattedString;
}

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    initSocket(strapi);

    strapi.db.lifecycles.subscribe({
      models: ["api::app-user.app-user"],

      async afterDelete(event) {
        const { uid, user_type } = event.result;
        const modelName = user_type?.toLowerCase();

        const entry = await strapi.db
          .query(`api::${modelName}.${modelName}`)
          .findOne({
            where: {
              uid,
            },
          });

        if (entry) {
          await setAsDeleted(strapi, `api::${modelName}.${modelName}`, uid);
        }
      },
    });

    strapi.db.lifecycles.subscribe({
      models: [
        "api::partner.partner",
        "api::employee.employee",
        "api::vendor.vendor",
        "api::agency.agency",
        "api::sub-contractor.sub-contractor",
      ],

      async afterUpdate(event) {
        const { uid, is_deleted } = event.result;

        if (is_deleted) {
          const entry = await strapi.db
            .query(`api::app-user.app-user`)
            .findOne({
              where: {
                uid,
              },
            });

          if (entry) {
            await deleteItem(strapi, `api::app-user.app-user`, uid);
          }
        }
      },
    });

    strapi.db.lifecycles.subscribe({
      models: [
        "api::agency-credit-note.agency-credit-note",
        "api::agency-debit-note.agency-debit-note",
        "api::agency-payment-schedule.agency-payment-schedule",
        "api::agency-quotation.agency-quotation",
        "api::agency-requirement-form.agency-requirement-form",
        "api::agency-term.agency-term",
        "api::agency-work-order.agency-work-order",
        "api::created-invoice.created-invoice",
        "api::credit-note.credit-note",
        "api::debit-note.debit-note",
        "api::extra-work.extra-work",
        "api::leave-application.leave-application",
        "api::received-invoice.received-invoice",
        "api::released-note.released-note",
        "api::vendor-term.vendor-term",
        "api::vendor-quotation.vendor-quotation",
        "api::vendor-purchase-order.vendor-purchase-order",
        "api::vendor-payment-schedule.vendor-payment-schedule",
        // "api::vendor-material-requisition.vendor-material-requisition",
        "api::vendor-debit-note.vendor-debit-note",
        "api::sub-contractor-term.sub-contractor-term",
        "api::sub-contractor-work-order.sub-contractor-work-order",
        "api::sub-contractor-requirement-form.sub-contractor-requirement-form",
        "api::sub-contractor-quotation.sub-contractor-quotation",
        "api::sub-contractor-payment-schedule.sub-contractor-payment-schedule",
        "api::sub-contractor-debit-note.sub-contractor-debit-note",
        "api::released-note.released-note",
      ],

      async afterCreate(event) {
        let { result, model } = event;

        if (model?.uid === "api::agency-term.agency-term") {
          result = await strapi.db.query(model?.uid).findOne({
            where: {
              id: result?.id,
            },
            populate: {
              approved_by: true,
              creation_employee: true,
            },
          });
        }

        console.log("[PREVIEW MODEL HOOKS.EVENT]", event);
        console.log("[PREVIEW MODEL HOOKS.RESULT]", result);
        console.log("[PREVIEW MODEL HOOKS.MODEL]", model);

        const createdBy = result?.creation_employee;
        const approvedBy = result?.approved_by;

        let recipients = [];

        if (approvedBy) {
          if (approvedBy?.email_1) {
            recipients.push(approvedBy.email_1);
          }

          if (approvedBy?.email_2) {
            recipients.push(approvedBy.email_2);
          }
        }

        if (createdBy) {
          if (createdBy?.email_1) {
            recipients.push(createdBy.email_1);
          }

          if (createdBy?.email_2) {
            recipients.push(createdBy.email_2);
          }
        }

        let heading = result?.heading ?? result?.name;

        await strapi.entityService.create("api::email-queue.email-queue", {
          data: {
            template: `quick-stocks-created`,
            data: {
              ...result,
              heading,
              modelSlugSingular: model?.singularName,
              modelSlugPlural: model?.tableName?.replace(/_/g, "-"),
              modelNameTitleCase: formatString(model?.singularName),
              modelNameLowerCase: model?.singularName?.replace(/-/g, " "),
            },
            recipients,
          },
        });
      },

      async afterUpdate(event) {
        let { result, model } = event;

        if (model?.uid === "api::agency-term.agency-term") {
          result = await strapi.db.query(model?.uid).findOne({
            where: {
              id: result?.id,
            },
            populate: {
              approved_by: true,
              creation_employee: true,
            },
          });
        }

        const approvedBy = result?.approved_by;
        const createdBy = result?.creation_employee;

        let recipients = [];

        if ("status" in result && result.status !== "Approved") {
          return;
        }

        if (createdBy) {
          if (createdBy?.email_1) {
            recipients.push(createdBy.email_1);
          }

          if (createdBy?.email_2) {
            recipients.push(createdBy.email_2);
          }
        }

        if (approvedBy) {
          if (approvedBy?.email_1) {
            recipients.push(approvedBy.email_1);
          }

          if (approvedBy?.email_2) {
            recipients.push(approvedBy.email_2);
          }
        }

        let heading = result?.heading ?? result?.name;

        await strapi.entityService.create("api::email-queue.email-queue", {
          data: {
            template: `quick-stocks-updated`,
            data: {
              ...result,
              heading,
              modelSlugSingular: model?.singularName,
              modelSlugPlural: model?.tableName?.replace(/_/g, "-"),
              modelNameTitleCase: formatString(model?.singularName),
              modelNameLowerCase: model?.singularName?.replace(/-/g, " "),
            },
            recipients,
          },
        });
      },
    });
  },
};
