'use strict';

/**
 * petty-cash service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::petty-cash.petty-cash');
