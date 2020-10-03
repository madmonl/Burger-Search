import React from "react";
import { Chip } from "@material-ui/core";
import { useStyles } from "./styles";

export default function Ingredients({ ingredients, setIngredients }) {
  const classes = useStyles();

  const handleClick = (ingredient) => {
    setIngredients({
      ...ingredients,
      [ingredient]: !ingredients[ingredient],
    });
  };

  const sortedIngredients = Object.keys(ingredients).sort();

  return (
    <div className={classes.chipsContainer}>
      {sortedIngredients.map((ingredient) => {
        return ingredients[ingredient] ? (
          <Chip
            className={classes.chip}
            color="primary"
            onClick={() => handleClick(ingredient)}
            key={ingredient}
            label={ingredient}
            variant="outlined"
            onDelete={() => handleClick(ingredient)}
          />
        ) : (
          <Chip
            className={classes.chip}
            color="primary"
            onClick={() => handleClick(ingredient)}
            key={ingredient}
            label={ingredient}
            variant="outlined"
          />
        );
      })}
    </div>
  );
}
