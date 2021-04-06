require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const userRouter = require("./src/routes/users.routes");
const { getAllUsers } = require("./src/api/controllers/users.controllers");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/users", getAllUsers);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON: http://localhost:${PORT}`);
});
