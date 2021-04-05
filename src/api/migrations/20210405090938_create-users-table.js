exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("userId").primary();
    table.string("username", [20]).notNullable();
    table.string("firstName", [100]).notNullable();
    table.string("lastName", [100]).notNullable();
    table.enu("gender", ["FEMALE", "MALE"]).notNullable();
    table.string("email", [100]).notNullable();
    table.string("password").notNullable();
    table.string("phone", [30]).notNullable();
    table.text("address").notNullable();
    table.string("city", [30]).notNullable();
    table.integer("zip", [10]).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
