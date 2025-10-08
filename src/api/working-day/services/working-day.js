'use strict';

/**
 * working-day service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::working-day.working-day');
