'use strict';

/**
 * rfi service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rfi.rfi');
