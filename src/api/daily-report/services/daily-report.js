'use strict';

/**
 * daily-report service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-report.daily-report');
