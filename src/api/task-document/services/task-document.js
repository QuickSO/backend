'use strict';

/**
 * task-document service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-document.task-document');
