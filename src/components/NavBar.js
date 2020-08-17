import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loggedOut } from "../store/user/actions";
import { selectUser } from "../store/user/selector";

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  function logOutHandler(event) {
    event.preventDefault();
    dispatch(loggedOut());
  }

  return (
    <div>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Main Page
      </NavLink>{" "}
      {Object.keys(user).length === 0 ? (
        <NavLink
          exact
          to="/signup"
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Sign up
        </NavLink>
      ) : null}{" "}
      {Object.keys(user).length === 0 ? (
        <NavLink
          exact
          to="/login"
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Log in
        </NavLink>
      ) : (
        <button onClick={logOutHandler}>Log out</button>
      )}
    </div>
  );
}
