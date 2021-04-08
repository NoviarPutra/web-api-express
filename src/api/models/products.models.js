const dbConnection = require("../config/db.config");

module.exports = {
  createNew: async (payload) => {
    return await dbConnection("products").returning("*").insert(payload);
  },
};
