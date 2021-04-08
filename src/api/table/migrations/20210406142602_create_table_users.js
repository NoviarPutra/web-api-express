exports.up = function (knex) {
  return knex.schema.raw(`
  CREATE TYPE gender AS ENUM ('FEMALE','MALE')
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    gender gender NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(50) NOT NULL,
    zip INT NOT NULL,
    created_at timestamp without time zone default (now() at time zone 'utc')
  )
  `);
};

exports.down = function (knex) {
  return knex.schema.raw(`
  DROP TABLE IF EXISTS users
  `);
};
