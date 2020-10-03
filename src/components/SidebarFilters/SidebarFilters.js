import React from "react";
import {
  Drawer,
  Divider,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import { useStyles } from "./styles";
import Ingredients from "../Filters/Ingredients/Ingredients";
import Restaurants from "../Filters/Restaurants/Restaurants";

export default function SidebarFilters({
  ingredients,
  setIngredients,
  restaurants,
  setRestaurants,
}) {
  const [ingredientsOpen, setIngredientsOpen] = React.useState(true);
  const [restaurantsOpen, setRestaurantsOpen] = React.useState(true);
  const classes = useStyles();

  const handleClickToggleIngredients = () => {
    setIngredientsOpen(!ingredientsOpen);
  };

  const handleClickToggleRestaurants = () => {
    setRestaurantsOpen(!restaurantsOpen);
  };

  return (
    <Drawer
      direction="rtl"
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            disableSticky
            component="div"
            id="nested-list-subheader"
          >
            בחר מרכיבים ומסעדות שאתה אוהב
          </ListSubheader>
        }
      >
        <Divider />
        <ListItem button onClick={handleClickToggleRestaurants}>
          <ListItemText primary="רשימת מסעדות" />
        </ListItem>
        <Collapse in={restaurantsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <Restaurants
                restaurants={restaurants}
                setRestaurants={setRestaurants}
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClickToggleIngredients}>
          <ListItemText primary="רשימת מרכיבים" />
        </ListItem>
        <Collapse in={ingredientsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <Ingredients
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
