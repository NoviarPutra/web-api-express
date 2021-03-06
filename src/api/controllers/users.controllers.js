const bcrypt = require("bcrypt");
const generateToken = require("../middleware/generateToken");
const {
  checkEmail,
  register,
  findAllUsers,
} = require("../models/users.models.js");

module.exports = {
  createNewUser: async (req, res) => {
    const {
      username,
      firstname,
      lastname,
      gender,
      email,
      password,
      phone,
      address,
      city,
      zip,
    } = req.body;
    try {
      const isRegistered = await checkEmail(email);
      if (isRegistered[0]) {
        return res
          .status(409)
          .json({ success: false, message: `${email} already exists !` });
      } else {
        const hashPassword = await bcrypt.hashSync(password, 10);
        const reg = await register({
          username: username,
          firstname: firstname,
          lastname: lastname,
          gender: gender,
          email: email,
          password: hashPassword,
          phone: phone,
          address: address,
          city: city,
          zip: zip,
        });
        if (reg) {
          return res.status(201).json({
            success: true,
            message: `Success insert ${reg[0].email}`,
          });
        } else {
          return res.status(400).json({
            success: false,
            message: "Something went wrong",
          });
        }
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const isRegistered = await checkEmail(email);
      if (!isRegistered[0]) {
        return res.status(404).json({
          success: false,
          message: `${email} not registered !`,
        });
      }
      const compare = await bcrypt.compareSync(
        password,
        isRegistered[0].password
      );
      if (compare) {
        const token = generateToken(isRegistered[0]);
        return res.status(200).json({
          success: true,
          message: "Login Success",
          token: token,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Incorrect password",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  findAllUsers: async (req, res) => {
    try {
      const getAll = await findAllUsers();
      return res.status(200).json({
        success: true,
        message: `Success get all users`,
        data: getAll.rows,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
