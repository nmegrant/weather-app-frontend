import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        exact
        to="/signup"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Sign up
      </NavLink>{" "}
      <NavLink
        exact
        to="login"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}
