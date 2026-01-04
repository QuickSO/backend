'use strict';

/**
 * letterhead service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::letterhead.letterhead');
