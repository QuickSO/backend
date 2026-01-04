'use strict';

/**
 * attendance-mode service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attendance-mode.attendance-mode');
