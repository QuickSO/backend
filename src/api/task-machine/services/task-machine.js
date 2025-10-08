'use strict';

/**
 * task-machine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-machine.task-machine');
