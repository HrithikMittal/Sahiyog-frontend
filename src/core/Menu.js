import React from "react";
import { Link, withRouter } from "react-router-dom";

import { isAuthenticated, signout } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>

        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/admin/login")}
                to="/admin/login"
              >
                Signin
              </Link>
            </li>
          </>
        )}
        {isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                style={isActive(
                  history,
                  `/user/${isAuthenticated().userRes._id}`
                )}
                to={`/user/${isAuthenticated().userRes._id}`}
              >
                {`${isAuthenticated().userRes.name}'s profile`}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link disabled"
                style={isActive(history, "/signout")}
                to=""
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
