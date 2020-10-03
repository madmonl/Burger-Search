const express = require("express");
const db = require("./db");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

const ingredients = [];
const dishes = {};
const restaurants = {};

async function fetchRestaurantData() {
  const currRestaurants = await db.ref("restaurants").once("value");
  currRestaurants.forEach((restaurant) => {
    const currDishes = restaurant.val().dishes;
    const menu = restaurant.val().menu;
    restaurants[restaurant.key] = {
      dishes: [],
      name: restaurant.val().name,
    };
    Object.keys(currDishes).forEach((dishName) => {
      const dish = currDishes[dishName];
      restaurants[restaurant.key].dishes.push(dishName);
      const currIngredients = [];
      Array.from(dish).forEach((ingredient) => {
        ingredients.push(ingredient);
        currIngredients.push(ingredient);
      });
      const currDish = {
        menu,
        name: dish.key,
        ingredients: currIngredients,
        restaurant: restaurant.key,
      };
      dishes[dishName] = currDish;
    });
  });
}

app.get("/api/restaurants", async function (_, res) {
  await fetchRestaurantData();
  res.send({
    restaurants,
    dishes,
    ingredients: Array.from(new Set(ingredients)),
  });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 4999);
