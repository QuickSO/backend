'use strict';

/**
 * work-group service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-group.work-group');
