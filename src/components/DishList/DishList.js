import React from "react";
import { useStyles } from "./styles";
import { Card, CardContent, Typography, Link } from "@material-ui/core";

function shouldShowDish(dish, ingredients) {
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

export default function DishList({ restaurants, dishes, ingredients }) {
  const classes = useStyles();
  return (
    <div className={classes.dishesContainer}>
      <h1 className={classes.dishesHeader}>רשימת מנות:</h1>
      {Object.keys(dishes).map((dishName) => {
        const dish = dishes[dishName];
        const shouldShow = shouldShowDish(dish, ingredients);

        return (
          shouldShow && (
            <Card key={dishName} className={classes.card} variant="outlined">
              <CardContent>
                <Typography variant="h6">{dishName}</Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {dish.ingredients.toString()}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {console.log("menu", restaurants[dish.restaurant])}
                  <Link href={dish.menu} variant="body2">
                    {dish.restaurant}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          )
        );
      })}
    </div>
  );
}
