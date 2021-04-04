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
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const verifyEmail = await dbConnection.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
      );
      const checkPass = bcrypt.compareSync(
        password,
        verifyEmail.rows[0].password
      );

      if (!verifyEmail) {
        return res.status(404).json({
          success: false,
          message: `${email} not registered !`,
        });
      } else if (checkPass) {
        return res.status(200).json({
          success: true,
          message: "Login Success",
          token: null,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Wrong password",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
