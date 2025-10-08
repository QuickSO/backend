'use strict';

/**
 * roster service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::roster.roster');
