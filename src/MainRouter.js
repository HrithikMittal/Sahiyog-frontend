import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./core/Home";
import Login from "./admin/Login";
import SideNavbar from "./core/Sidenavbar";
import Form from "./containers/Form/Form";
import Medicine from "./containers/Home/Medicine";
const MainRouter = () => {
  return (
    <div>
      <SideNavbar></SideNavbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/admin/login" exact component={Login}></Route>
        <Route path="/form" exact component={Form}></Route>
        <Route path="/medicine" exact component={Medicine}></Route>
      </Switch>
    </div>
  );
};

export default MainRouter;
