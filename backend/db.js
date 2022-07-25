const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/evolv";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connnected to Mongo Successfully !!");
  });
};

module.exports = connectToMongo;
