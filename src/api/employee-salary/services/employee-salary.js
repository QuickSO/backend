'use strict';

/**
 * employee-salary service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-salary.employee-salary');
