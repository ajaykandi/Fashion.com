const express = require("express");
const dbConnection = require("./db/connect");
const errorHandlerMiddleware = require("./middlewares/error-handler");
var cors = require("cors");
require("dotenv").config();
require("express-async-errors");

const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const stripeRoute = require("./routes/stripe");
const orderRoute = require("./routes/order");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/checkout", stripeRoute);
app.use("/api/v1/order", orderRoute);

// Route not found Middleware
app.use("*", (req, res) => {
  res.send("Route Not Found");
});

app.use(errorHandlerMiddleware);

// server and DB connection
const port = process.env.port || 5500;
const Start = async () => {
  try {
    await dbConnection(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`listening at Port :http://localhost:${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
Start();
