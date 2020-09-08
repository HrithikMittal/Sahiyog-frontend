import React from "react";
import { Route } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Sidenavbar = () => {
  return (
    <Route
      render={({ location, history }) => (
        <React.Fragment>
          <SideNav
            className="bg-primary"
            onSelect={(selected) => {
              const to = "/" + selected;
              if (location.pathname !== to) {
                history.push(to);
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-home"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>Home</NavText>
              </NavItem>
              <NavItem eventKey="admin/login">
                <NavIcon>
                  <i className="fa fa-sign-in" style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText>Login</NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
        </React.Fragment>
      )}
    />
  );
};

export default Sidenavbar;
