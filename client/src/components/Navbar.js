import React from "react";
import { NavMenu, NavItem } from "../styles/Global";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavMenu>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/quakes">Quakes</Link>
      </NavItem>
    </NavMenu>
  );
};
export default Navbar;
