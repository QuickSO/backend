'use strict';

/**
 * received-invoice service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::received-invoice.received-invoice');
