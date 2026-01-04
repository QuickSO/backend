'use strict';

/**
 * credit-note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::credit-note.credit-note');
