"use strict";

/**
 * received-note service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::vendor-received-note.vendor-received-note"
);
