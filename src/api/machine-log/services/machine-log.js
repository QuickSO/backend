"use strict";

/**
 * machine-maintenance-log service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::machine-log.machine-log");
