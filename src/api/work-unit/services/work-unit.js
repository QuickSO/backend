'use strict';

/**
 * work-unit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-unit.work-unit');
