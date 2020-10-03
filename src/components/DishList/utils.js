export function shouldShowDishRestaurantsFiler(dish, restaurants) {
  console.log("dish", dish);
  let selectedRestaurantsCount = 0;
  let isDishRestaurantSelected = false;

  for (let [_, restaurant] of Object.entries(restaurants)) {
    if (restaurant.isSelected) {
      if (restaurant.name === dish.restaurant) {
        isDishRestaurantSelected = true;
      }
      selectedRestaurantsCount++;
    }
  }

  console.log("isDishRestaurantSelected", isDishRestaurantSelected);

  return selectedRestaurantsCount === 0 ? true : isDishRestaurantSelected;
}

export function shouldShowDishIngredientsFilter(dish, ingredients) {
  let selectedIngredientsCount = 0;
  let areAllRequiredIngredientsInDish = true;

  for (let [ingredientName, isIngredientSelected] of Object.entries(
    ingredients
  )) {
    if (isIngredientSelected) {
      selectedIngredientsCount++;
    }

    if (isIngredientSelected && !dish.ingredients.includes(ingredientName)) {
      areAllRequiredIngredientsInDish = false;
    }
  }

  return selectedIngredientsCount === 0
    ? true
    : areAllRequiredIngredientsInDish;
}
