const environment = process.env.NODE_ENV || "development";
const config = require("../../../knexfile")[environment];
const knex = require("knex");

const dbConnection = knex(config);

module.exports = dbConnection;
