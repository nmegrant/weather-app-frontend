import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loggedOut } from "../store/user/actions";
import { selectToken } from "../store/user/selector";

export default function NavBar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken());

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
      {token === null ? null : (
        <NavLink
          exact
          to="/profile"
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          My Page
        </NavLink>
      )}{" "}
      {token === null ? (
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
