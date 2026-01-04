'use strict';

/**
 * reimburse service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reimburse.reimburse');
