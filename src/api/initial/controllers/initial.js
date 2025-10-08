'use strict';

/**
 *  initial controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::initial.initial');
