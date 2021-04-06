exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
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
