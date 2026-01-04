'use strict';

/**
 * tool-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tool-type.tool-type');
