'use strict';

/**
 * initial service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::initial.initial');
