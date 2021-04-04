require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const userRouter = require("./src/routes/users.routes");
const PORT = process.env.PORT;

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON: http://localhost:${PORT}`);
});
