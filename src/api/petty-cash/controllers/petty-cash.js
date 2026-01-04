'use strict';

/**
 *  petty-cash controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::petty-cash.petty-cash');
