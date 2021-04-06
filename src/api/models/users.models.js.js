const dbConnection = require("../config/db.config");

module.exports = {
  register: async (body) => {
    try {
      const register = await dbConnection("users").insert(body);
      return register;
    } catch (error) {
      console.log(error);
    }
  },
  checkEmail: async (email) => {
    try {
      const check = await dbConnection("users").where({ email });
      return check;
    } catch (error) {
      console.log(error);
    }
  },
  getAllUsers: async () => {
    try {
      const getAllUsers = await dbConnection.raw("SELECT * FROM users");
      return getAllUsers;
    } catch (error) {
      console.log(error);
    }
  },
};
