'use strict';
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rfi.rfi', {
  config: {
    update: { policies: ['api::rfi.approval-guard'] },
  },
});
