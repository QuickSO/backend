'use strict';

/**
 * task-work service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-work.task-work');
