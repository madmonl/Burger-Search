import React from "react";
import { Drawer, Divider } from "@material-ui/core";
import { useStyles } from "./styles";

export default function FoodDictionary() {
  const classes = useStyles();
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
    </Drawer>
  );
}
