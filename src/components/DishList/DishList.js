import React from "react";
import { useStyles } from "./styles";
import { Card, CardContent, Typography, Link } from "@material-ui/core";
import {
  shouldShowDishRestaurantsFiler,
  shouldShowDishIngredientsFilter,
} from "./utils.js";

export default function DishList({ restaurants, dishes, ingredients }) {
  const classes = useStyles();
  return (
    <div className={classes.dishesContainer}>
      <h1 className={classes.dishesHeader}>רשימת מנות:</h1>
      {Object.keys(dishes).map((dishName) => {
        const dish = dishes[dishName];
        const shouldShow =
          shouldShowDishIngredientsFilter(dish, ingredients) &&
          shouldShowDishRestaurantsFiler(dish, restaurants);

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
