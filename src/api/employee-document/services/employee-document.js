'use strict';

/**
 * employee-document service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-document.employee-document');
