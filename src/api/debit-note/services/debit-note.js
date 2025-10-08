'use strict';

/**
 * debit-note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::debit-note.debit-note');
