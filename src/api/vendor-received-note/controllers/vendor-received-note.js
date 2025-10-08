"use strict";

/**
 *  received-note controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vendor-received-note.vendor-received-note"
);
