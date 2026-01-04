'use strict';

/**
 * leave-application service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leave-application.leave-application');
