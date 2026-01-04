'use strict';

/**
 * meeting-comment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meeting-comment.meeting-comment');
