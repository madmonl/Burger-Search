import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";
import SidebarFilters from "./components/SidebarFilters/SidebarFilters";
import DishList from "./components/DishList/DishList";

async function fetchRestaurantData() {
  const { data } = await axios.get("/api/restaurants");
  return data;
}

function selectedIngredients(ingredients) {
  const selectedIngredients = {};
  ingredients.forEach((ingredient) => {
    selectedIngredients[ingredient] = false;
  });

  return selectedIngredients;
}

function App() {
  const { data } = useQuery("restaurants", fetchRestaurantData);
  const [restaurants, setRestaurants] = useState(data.restaurants);
  const [dishes, setDishes] = useState(data.dishes);
  const [ingredients, setIngredients] = useState(
    selectedIngredients(data.ingredients)
  );

  return (
    <div className="App">
      <SidebarFilters
        ingredients={ingredients}
        setIngredients={setIngredients}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
      <DishList
        ingredients={ingredients}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        dishes={dishes}
        setDishes={setDishes}
      />
    </div>
  );
}

export default App;
