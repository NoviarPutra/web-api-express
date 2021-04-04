const dbConnection = require("../config/db.config");
const bcrypt = require("bcrypt");

module.exports = {
  createNewUser: async (req, res) => {
    const {
      username,
      firstName,
      lastName,
      gender,
      email,
      password,
      phone,
      address,
      city,
      zip,
    } = req.body;
    try {
      const validation = await dbConnection.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
      );
      if (validation.rows[0]) {
        return res.status(409).json({
          success: false,
          message: `${email} already exists !`,
        });
      } else {
        const hash = bcrypt.hashSync(password, 10);
        const results = await dbConnection.query(
          `INSERT INTO users(username,firstName,lastName,gender,email,password,phone,address,city,zip) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING username`,
          [
            username,
            firstName,
            lastName,
            gender,
            email,
            hash,
            phone,
            address,
            city,
            zip,
          ]
        );
        if (results) {
          return res.status(201).json({
            success: true,
            message: `${results.rows[0].username} created !`,
          });
        } else {
          return res.status(400).json({
            success: false,
            message: "Something went wrong",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  loginUser: (req, res) => {},
};
