'use strict';

/**
 * system-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::system-event.system-event');
