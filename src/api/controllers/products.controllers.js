const { createNew } = require("../models/products.models");

module.exports = {
  createNew: async (req, res) => {
    const body = req.body;
    try {
      const results = await createNew(body);
      if (results) {
        return res.status(201).json({
          success: true,
          message: `Insert Success product ${body.name_product}`,
          data: results,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
