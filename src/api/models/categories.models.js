const dbConnection = require("../config/db.config");

module.exports = {
  createNew: async (payload) => {
    return await dbConnection.raw(
      `INSERT INTO categories (category_name) VALUES ('${payload}') RETURNING *`
    );
  },
  checkCategory: async (category_name) => {
    return await dbConnection("categories")
      .where("category_name", category_name)
      .first();
  },
  findAllCategories: async () => {
    return await dbConnection.raw(`SELECT * FROM categories`);
  },
  findById: async (payload) => {
    return await dbConnection("categories").where({ id: payload });
  },
  updateCategory: async (payload) => {
    return await dbConnection("categories")
      .where("id", "=", payload.id)
      .update({
        category_name: payload.name,
      });
  },
  deleteCategory: async (payload) => {
    return await dbConnection("categories").where("id", "=", payload.id).del();
  },
};
