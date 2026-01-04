"use strict";

/**
 * received-note router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::vendor-received-note.vendor-received-note"
);
