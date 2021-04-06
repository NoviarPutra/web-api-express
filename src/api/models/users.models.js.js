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
  login: async (body) => {
    try {
      const login = await dbConnection("user").insert(body);
      return login;
    } catch (error) {
      console.log(error);
    }
  },
  checkEmail: async (email) => {
    try {
      const check = await dbConnection
        .select("*")
        .from("users")
        .whereRaw("id", "=", email);
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
