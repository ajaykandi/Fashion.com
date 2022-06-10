require("dotenv").config();

const dbConnection = require("./db/connect");
const Product = require("./models/product");

// this File is for Uploading all prodicts at a time

const products = require("./product.json");

const start = async () => {
  try {
    await dbConnection(process.env.MONGO_URl);
    await Product.deleteMany();
    await Product.create(products);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
