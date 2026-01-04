'use strict';

/**
 * initial router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::initial.initial');
