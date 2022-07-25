const express = require("express");
const router = express.Router();
const Meal = require("../models/Meal");

/* Save Food Item */

router.get("/show_plan", async (req, res) => {
  //Items in body
  let data = await Meal.find({name : req.body.name}).populate('fooditems').exec();
  res.json(data);
});

module.exports = router;
