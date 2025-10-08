'use strict';

/**
 * petty-cash router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::petty-cash.petty-cash');
