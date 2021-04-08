const {
  findAllCategories,
  createNew,
  checkCategory,
} = require("../models/categories.models");

module.exports = {
  createNew: async (req, res) => {
    const { category_name } = req.body;
    try {
      const isRegistered = await checkCategory(category_name);
      if (isRegistered) {
        return res.status(409).json({
          success: false,
          message: `Category ${category_name} already exists`,
          data: isRegistered,
        });
      } else {
        const results = await createNew(category_name);
        if (results) {
          return res.status(201).json({
            success: true,
            message: "Insert Success",
            data: results.rows,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const results = await findAllCategories();
      if (results) {
        return res.status(200).json({
          success: true,
          message: "Success get all categories",
          data: results.rows,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
