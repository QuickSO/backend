'use strict';

/**
 * task-machine router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::task-machine.task-machine');
