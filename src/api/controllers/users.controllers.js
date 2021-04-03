const dbConnection = require("../config/db.config");
const bcrypt = require("bcrypt");

module.exports = {
  createNewUser: (req, res) => {
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
    const validation = "SELECT * FROM users WHERE email = ?";
    dbConnection.query(validation, [email], (error, results) => {
      if (results[0]) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      } else {
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(password, salt, (error, results) => {
            dbConnection.query(
              `INSERT INTO users(username,firstName,lastName,gender,email,password,phone,address,city,zip) VALUES (?,?,?,?,?,?,?,?,?,?)`,
              [
                username,
                firstName,
                lastName,
                gender,
                email,
                results,
                phone,
                address,
                city,
                zip,
              ],
              (error, results) => {
                if (error) {
                  return res.status(400).json({
                    success: false,
                    message: error,
                  });
                }
                return res.status(201).json({
                  success: true,
                  message: "Success",
                });
              }
            );
          });
        });
      }
    });
  },
  loginUser: (req, res) => {},
};
