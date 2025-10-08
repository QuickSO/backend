'use strict';

/**
 * stock-ledger service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stock-ledger.stock-ledger');
