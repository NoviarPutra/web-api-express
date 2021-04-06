// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/api/data/index.db3",
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
  },
};
