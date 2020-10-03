import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

export default function Restaurants({ restaurants, setRestaurants }) {
  const handleChange = (restaurant) => {
    console.log(restaurant);
    setRestaurants({
      ...restaurants,
      [restaurant.name]: {
        ...restaurant,
        isSelected: !restaurant.isSelected,
      },
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Object.keys(restaurants).map((restaurantName) => (
        <FormControlLabel
          key={restaurantName}
          control={
            <Checkbox
              checked={!!restaurants[restaurantName].isSelected}
              onChange={() => {
                handleChange(restaurants[restaurantName]);
              }}
              name="checkedB"
              color="primary"
            />
          }
          label={restaurantName}
        />
      ))}
    </div>
  );
}
