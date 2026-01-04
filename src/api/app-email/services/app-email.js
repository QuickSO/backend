'use strict';

/**
 * app-email service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-email.app-email');
