'use strict';

/**
 * notification-read service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notification-read.notification-read');
