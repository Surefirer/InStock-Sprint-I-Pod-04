import React from "react";
import { Logos } from "./assets";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={Logos.instockLogoSvg}
          alt="instock logo"
        />
        <nav className="header__nav">
          <Link to="/inventory">
            <span className="header__link header__link--active">Inventory</span>
          </Link>
          <Link to="/locations">
            <span className="header__link">Locations</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
