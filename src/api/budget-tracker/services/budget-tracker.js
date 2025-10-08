'use strict';

/**
 * budget-tracker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::budget-tracker.budget-tracker');
