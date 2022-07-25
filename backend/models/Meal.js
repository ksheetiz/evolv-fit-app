const mongoose = require("mongoose");
const { Schema } = mongoose;

const MealSchema = new Schema({
  name: String,
  category: {
    type: String,
    enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner"],
    default: "Lunch",
  },
  fooditems: [{ type: Schema.Types.ObjectId, ref: 'Fooditem', required: true }],
});
module.exports = mongoose.model('Meal', MealSchema);
