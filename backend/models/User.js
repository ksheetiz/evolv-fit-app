const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  calorieRequirement: {
    type: Number,
    required: true,
  },
  mealPlan: [{ type: Schema.Types.ObjectId, ref: 'Meal', required: true }],
});
module.exports = mongoose.model("User", UserSchema);
