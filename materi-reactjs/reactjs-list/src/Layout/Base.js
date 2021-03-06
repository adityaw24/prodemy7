import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Recipes from "../Components/Recipes";
import Rother from "../Components/Rother";
import LayoutStyles from "./LayoutStyle";
import { Route } from "react-router-dom";

//Halaman base untuk layout
const Base = ({ match }) => {
  const classes = LayoutStyles();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    // console.log("this")
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Header toggleDrawer={toggleDrawer} open={open} /> */}
      <header>
        <Route path={`${match.url}/resep`} component={Header} />
        <Route path={`${match.url}/test-page`} component={Header2} />
      </header>
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Route path={`${match.url}/resep`} component={Recipes} />
        <Route path={`${match.url}/test-page`} component={Rother} />
        <Footer />
      </main>
    </div>
  );
};

export default Base;
