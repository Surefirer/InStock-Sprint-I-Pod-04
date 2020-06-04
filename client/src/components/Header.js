import React from "react";
import { Logos } from "./assets";
import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/inventory" className="header__link">
            <span>Inventory</span>
          </Link>
          <Link to="/locations" className="header__link">
            <span>Locations</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
