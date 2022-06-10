const mongoose = require("mongoose");

const dbConnection = (url) => {
  mongoose.connect(url).then((res) => console.log("Db Connected"));
};
module.exports = dbConnection;
