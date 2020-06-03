import React from "react";
import { Logos } from "./assets";

function Header() {
  return (
    <header class="header">
      <div class="header__container">
        <img
          class="header__logo"
          src={Logos.instockLogoSvg}
          alt="instock logo"
        />
        <nav class="header__nav">
          <span class="header__link header__link--active">Inventory</span>
          <span class="header__link">Locations</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
