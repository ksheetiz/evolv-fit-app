const express = require("express");
const router = express.Router();
const MealItem = require("../models/Meal");
const User = require("../models/User");

/* Save Meal Item */

router.post("/add_user", async (req, res) => {
  //Items in body
  const {name, calorieRequirement, mealPlan} = req.body;
    let data = await MealItem.find({ name: mealPlan });
  console.log(data);
  const user = new User({
    name : name,
    calorieRequirement : calorieRequirement,
    mealPlan : data
  })
  const saveUser = await user.save();
  res.json(saveUser);
});


module.exports = router;