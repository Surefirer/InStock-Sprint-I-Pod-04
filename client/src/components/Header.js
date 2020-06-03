import React from "react";
import { Logos } from "./assets";

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
          <span className="header__link header__link--active">Inventory</span>
          <span className="header__link">Locations</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
