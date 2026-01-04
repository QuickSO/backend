
module.exports = ({ strapi }) => ({
  async getQuickStockNumbers(ctx) {
    try {
     
      const agencyCount = await strapi.entityService.count("api::agency.agency", {});
      const subContractorCount = await strapi.entityService.count("api::sub-contractor.sub-contractor", {});
      const vendorCount = await strapi.entityService.count("api::vendor.vendor", {});
      
      const creditNotesCount = await strapi.entityService.count("api::credit-note.credit-note", {});
      const debitNotesCount = await strapi.entityService.count("api::debit-note.debit-note", {});
      const extraWorkCount = await strapi.entityService.count("api::extra-work.extra-work", {});
      const invoiceCreatedCount = await strapi.entityService.count("api::created-invoice.created-invoice", {});
      const invoiceReceivedCount = await strapi.entityService.count("api::received-invoice.received-invoice", {});
      const purchaseOrderCount = await strapi.entityService.count("api::vendor-purchase-order.vendor-purchase-order", {});
      const workOrderCount = await strapi.entityService.count("api::sub-contractor-work-order.sub-contractor-work-order", {});

      return ctx.body = {
        agencyCount:agencyCount,
        subContractorCount:subContractorCount,
        vendorCount:vendorCount,
        creditNotesCount:creditNotesCount,
        debitNotesCount:debitNotesCount,
        extraWorkCount:extraWorkCount,
        procurementCount:0,
        mrnCount:0,
        grnCount:0,
        invoiceCreatedCount:invoiceCreatedCount,
        invoiceReceivedCount:invoiceReceivedCount,
        purchaseOrderCount:purchaseOrderCount,
        workOrderCount:workOrderCount
      };
    } catch (error) {
      console.error("getNumbers", error);
      return ctx.body = {
        error: error?.message,
      };
    }
  },
});
