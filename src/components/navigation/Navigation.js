import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to="/register"
      >
        register
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
