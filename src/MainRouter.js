import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./core/Home";
import Login from "./admin/Login";
import SideNavbar from "./core/Sidenavbar";

const MainRouter = () => {
  return (
    <div>
      <SideNavbar></SideNavbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/admin/login" exact component={Login}></Route>
      </Switch>
    </div>
  );
};

export default MainRouter;
