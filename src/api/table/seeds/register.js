exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          username: "admin",
          firstName: "Noviar",
          lastName: "putra",
          gender: "MALE",
          email: "test@email.com",
          password: "password",
          phone: "65764536547",
          address: "Komplek",
          city: "Bekasi",
          zip: "236475",
        },
      ]);
    });
};
