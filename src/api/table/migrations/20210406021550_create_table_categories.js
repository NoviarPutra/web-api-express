exports.up = function (knex) {
  return knex.schema.raw(`
  CREATE TABLE IF NOT EXISTS categories(
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    created_at timestamp without time zone default (now() at time zone 'utc')
    
  )
  `);
};

exports.down = function (knex) {
  return knex.schema.raw(`
  DROP TABLE IF EXISTS categories;
`);
};
