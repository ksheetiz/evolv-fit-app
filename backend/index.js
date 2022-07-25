const connecttomongo = require("./db");
var express = require("express");
var cors = require("cors");

connecttomongo();

var app = express();
const port = 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

//Available Routes

app.use("/api/FoodItem", require("./routes/add_food"));
app.use("/api/MealItem", require("./routes/add_meal"));
app.use("/api/Plans", require("./routes/Show_Meal"));
app.use("/api/users", require("./routes/add_user"));

app.listen(port, () => {
  console.log(`Evolv Backend Listening on port ${port}`);
});
