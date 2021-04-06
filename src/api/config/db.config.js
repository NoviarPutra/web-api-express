const environment = process.env.DB_ENVIRONMENT || "development";
const config = require("../../../knexfile")[environment];
const knex = require("knex");

const dbConnection = knex(config);

module.exports = dbConnection;
