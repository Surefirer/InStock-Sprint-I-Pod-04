import React from "react";
import { Logos } from "./assets";
import { NavLink, Link } from "react-router-dom";

function Header({ currentTab, changeCurrentTab }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/inventory" onClick={() => changeCurrentTab("inventory")}>
          <img
            className="header__logo"
            src={Logos.instockLogoSvg}
            alt="instock logo"
          />
        </Link>
        <nav className="header__nav">
          <NavLink
            to="/inventory"
            className={
              currentTab === "inventory"
                ? "header__link active"
                : "header__link"
            }
            onClick={() => changeCurrentTab("inventory")}
          >
            <span>Inventory</span>
          </NavLink>
          <NavLink
            to="/locations"
            className={
              currentTab === "locations"
                ? "header__link active"
                : "header__link"
            }
            onClick={() => changeCurrentTab("locations")}
          >
            <span>Locations</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
