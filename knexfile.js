// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_LOCAL,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: __dirname + "/src/api/table/migrations",
    },
    seeds: {
      directory: __dirname + "/src/api/table/seeds",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/src/api/table/migrations",
    },
    seeds: {
      directory: __dirname + "/src/api/table/seeds",
    },
  },
};
