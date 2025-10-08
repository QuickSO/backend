'use strict';

/**
 * task-comment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-comment.task-comment');
