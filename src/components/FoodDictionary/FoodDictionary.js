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
import Ingredients from "../Ingredients/Ingredients";

export default function FoodDictionary({ ingredients, setIngredients }) {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
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
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            בחר מרכיבים ומסעדות שאתה אוהב
          </ListSubheader>
        }
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="רשימת מרכיבים" />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
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
