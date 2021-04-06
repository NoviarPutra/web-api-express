const dbConnection = require("../config/db.config");

module.exports = {
  register: async (body) => {
    return await dbConnection("users").insert(body);
  },
  checkEmail: async (email) => {
    return await dbConnection("users").where({ email });
  },
  getAllUsers: async () => {
    return await dbConnection.raw("SELECT * FROM users");
  },
};
