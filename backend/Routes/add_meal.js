const express = require("express");
const router = express.Router();
const MealItem = require("../models/Meal");
const FoodItem = require("../models/Food");

/* Save Meal Item */

router.post("/save_meal", async (req, res) => {
  //Items in body
  const { name, category, fooditems } = req.body;
  let data = await FoodItem.find({ name: fooditems });

  const meal = new MealItem({
    name: name,
    category: category,
    fooditems: data,
  });
  const saveMeal = await meal.save();
  res.json(saveMeal);
});


module.exports = router;