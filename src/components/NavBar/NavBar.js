import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loggedOut } from "../../store/user/actions";
import { selectToken } from "../../store/user/selector";
import "./NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken());
  const history = useHistory();

  function logOutHandler(event) {
    event.preventDefault();
    dispatch(loggedOut());
    history.push("/");
  }

  return (
    <div className="navbar">
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "#1E3888",
        }}
        className="navlink"
      >
        Main Page
      </NavLink>{" "}
      {token === null ? null : (
        <NavLink
          exact
          to="/profile"
          activeStyle={{
            fontWeight: "bold",
            color: "#1E3888",
          }}
          className="navlink"
        >
          My Page
        </NavLink>
      )}{" "}
      <NavLink
        exact
        to="/stats"
        activeStyle={{
          fontWeight: "bold",
          color: "#1E3888",
        }}
        className="navlink"
      >
        Stats Page
      </NavLink>{" "}
      {token === null ? (
        <NavLink
          exact
          to="/login"
          activeStyle={{
            fontWeight: "bold",
            color: "#1E3888",
          }}
          className="navlink"
        >
          Log in
        </NavLink>
      ) : (
        <button className="navbar-button" onClick={logOutHandler}>
          Log out
        </button>
      )}
    </div>
  );
}
