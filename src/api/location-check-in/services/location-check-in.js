'use strict';

/**
 * location-check-in service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::location-check-in.location-check-in');
