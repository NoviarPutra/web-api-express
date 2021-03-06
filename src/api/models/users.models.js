const dbConnection = require("../config/db.config");

module.exports = {
  register: async (body) => {
    return await dbConnection("users").returning("*").insert(body);
  },
  checkEmail: async (email) => {
    return await dbConnection("users").where({ email });
  },
  findAllUsers: async () => {
    return await dbConnection.raw("SELECT * FROM users");
  },
};
