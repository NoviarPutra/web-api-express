const knex = require("knex");
const config = require("../../../knexfile");

const dbConnection = knex(config.development);

module.exports = dbConnection;
