const express = require("express");
const router = express.Router();
const FoodItem = require("../models/Food");

/* Save Food Item */

router.post("/save_item", async (req, res) => {
  //Items in body
  const { name, calories, carb, protein, fat, acceptedWeight } = req.body;

  const foodItem = new FoodItem({
    name,
    calories,
    carb,
    protein,
    fat,
    acceptedWeight,
  });

  const saveFood = await foodItem.save();

  res.json(saveFood);
});

module.exports = router;
