// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/api/data/index.db3",
    },
    migrations: {
      directory: __dirname + "/src/api/migrations",
    },
    seeds: {
      directory: __dirname + "/src/api/seeds",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: "knex_migration",
      directory: "/src/api/migrations",
    },
  },
};
