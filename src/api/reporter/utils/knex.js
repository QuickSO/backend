require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host:
      process.env.DATABASE_HOST ||
      "propostcard.cdasza3x2iym.ap-south-1.rds.amazonaws.com",
    user: process.env.DATABASE_USERNAME || "postgres",
    database: process.env.DATABASE_NAME || "QuickSoStrapi",
    password: process.env.DATABASE_PASSWORD || "Tpix0123",
    port: process.env.DATABASE_PORT || 5432,
  },
});

module.exports = knex;
