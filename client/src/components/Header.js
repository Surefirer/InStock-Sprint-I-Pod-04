import React from "react";
import { Logos } from "./assets";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/inventory">
          <img
            className="header__logo"
            src={Logos.instockLogoSvg}
            alt="instock logo"
          />
        </Link>
        <nav className="header__nav">
          <NavLink
            to="/inventory"
            className="header__link"
            activeClassName="active"
          >
            <span>Inventory</span>
          </NavLink>
          <NavLink
            to="/locations"
            className="header__link"
            activeClassName="active"
          >
            <span>Locations</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
