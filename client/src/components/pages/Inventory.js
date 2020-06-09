import React from "react";
import Icons from "../assets";
import InventoryMobile from "./InventoryMobile";
import { NavLink } from "react-router-dom";

function Inventory(props) {
  return (
    <>
      <div onClick={props.togglePop}>
        <button className="inventory__button">
          <img
            className="inventory__button--addIcon"
            src={Icons.addIcon}
            alt="create new inventory button"
          />
        </button>
      </div>
      <section className="inventory">
        <div className="inventory__wrapper">
          <h1 className="inventory__header">Inventory</h1>
          <div className="inventory__search">
            <input
              className="inventory__search--input"
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Search"
            />
            <img
              className="inventory__search--icon"
              src={Icons.searchIcon}
              alt="search icon"
            />
          </div>
        </div>
        <InventoryMobile inventoryList={props.inventoryList} />
        <div className="inventory__bodyTablet">
          <div className="inventory__titleWrapper">
            <h3 className="inventory__title inventory__item">ITEM</h3>
            <h3 className="inventory__title inventory__order">LAST ORDERED</h3>
            <h3 className="inventory__title  inventory__location">LOCATION</h3>
            <h3 className="inventory__title inventory__quantity">QUANTITY</h3>
            <h3 className="inventory__title inventory__status">STATUS</h3>
          </div>
          {props.inventoryList.map((inventory) => (
            <div className="inventory__contentWrapper" key={inventory.id}>
              <div className="inventory__itemWrapper">
                <NavLink
                  to={`/product/${inventory.id}`}
                  activeClassName="active"
                >
                  <h2 className="inventory__product">
                    {inventory.productName}
                  </h2>{" "}
                </NavLink>
                <p className="inventory__text">{inventory.briefDescription}</p>
              </div>

              <p className="inventory__text inventory__order">
                {inventory.lastOrder}
              </p>
              <p className="inventory__text inventory__location">
                {`${inventory.city}, ${inventory.country}`}
              </p>
              <p className="inventory__text inventory__quantity">
                {inventory.quantity}
              </p>
              <div className="inventory__statusWrapper">
                {inventory.inStock === true ? (
                  <p className="inventory__text">In Stock</p>
                ) : (
                  <p className="inventory__text">Out of Stock</p>
                )}
                <div className="inventory__iconWrapper">
                  <img
                    className="inventory__kebabIcon"
                    src={Icons.kebabDefault}
                    alt="inventory kebab default icon"
                  />
                  <img
                    className="inventory__kebabIcon--hover"
                    src={Icons.kebabActive}
                    alt="inventory kebab active icon"
                  />
                  <button className="inventory__remove">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Inventory;
