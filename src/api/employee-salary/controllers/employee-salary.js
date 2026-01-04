'use strict';

/**
 *  employee-salary controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::employee-salary.employee-salary');
