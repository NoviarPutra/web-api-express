require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const userRouter = require("./src/routes/users.routes");
const productRouter = require("./src/routes/products.routes");
const categoriesRouter = require("./src/routes/categories.routes");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON: http://localhost:${PORT}`);
});
