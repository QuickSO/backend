'use strict';

/**
 * system-event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::system-event.system-event');
