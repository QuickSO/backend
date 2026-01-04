'use strict';

/**
 * application-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-setting.application-setting');
