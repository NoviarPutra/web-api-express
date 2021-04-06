require("dotenv").config();
const environment = process.env.DB_ENVIRONMENT || "development";
const config = require("../../../knexfile")[environment];

module.exports = require("knex")(config);
