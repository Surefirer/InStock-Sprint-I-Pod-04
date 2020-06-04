import React from "react";
import { Logos } from "./assets";
import { Link } from "react-router-dom";

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
          <Link
            to="/inventory"
            className={
              props.isNavActive
                ? "header__link header__link--active"
                : "header__link"
            }
            onClick={props.clickNav}
          >
            <span>Inventory</span>
          </Link>
          <Link
            to="/locations"
            className={
              props.isNavActive
                ? "header__link header__link--active"
                : "header__link"
            }
            onClick={props.clickNav}
          >
            <span>Locations</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
