'use strict';

/**
 * released-note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::released-note.released-note');
