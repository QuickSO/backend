'use strict';

/**
 * payment-mode service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-mode.payment-mode');
