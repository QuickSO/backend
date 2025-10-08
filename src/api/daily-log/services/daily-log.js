'use strict';

/**
 * daily-log service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-log.daily-log');
