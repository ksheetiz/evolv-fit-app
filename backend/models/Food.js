const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodItemSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  calories: {
    type: Number,
    default: 0,
  },
  carb: {
    type: Number,
    default: 0,
  },
  protein: {
    type: Number,
    default: 0,
  },
  fat: {
    type: Number,
    default: 0,
  },
  acceptedWeight: {
    type: String,
    enum: ["ml", "litre", "kg", "gms", "item"],
    default: "gms",
  },
  itemWeight: Number,
});
module.exports = mongoose.model('Fooditem', FoodItemSchema);
