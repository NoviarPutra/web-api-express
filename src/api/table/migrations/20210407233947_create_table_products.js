exports.up = function (knex) {
  return knex.schema.raw(
    `
    CREATE TABLE products(
        id SERIAL,
        name_product VARCHAR(100) NOT NULL,
        price VARCHAR(100) NOT NULL,
        quantity INT NOT NULL,
        description TEXT NOT NULL,
        category_id INT NOT NULL,
        created_at timestamp without time zone default (now() at time zone 'utc'),        
        CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories(id)
    );
    `
  );
};

exports.down = function (knex) {
  return knex.schema.raw(`
  DROP TABLE IF EXISTS products;
  `);
};
