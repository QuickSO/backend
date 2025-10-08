'use strict';

/**
 * meeting-purpose service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meeting-purpose.meeting-purpose');
