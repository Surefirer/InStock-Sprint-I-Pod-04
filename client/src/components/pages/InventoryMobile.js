import React from "react";
import Icons from "../assets";
import { NavLink } from "react-router-dom";

function InventoryMobile(props) {
  return (
    <div className="inventory__bodyMobile">
      {props.inventoryList.map((inventory) => (
        <div className="inventory__wrapperMobile" key={inventory.id}>
          <div className="inventory__container">
            <NavLink to={`/product/${inventory.id}`}>
              <div className="inventory__container--item">
                <h3 className="inventory__title">ITEM</h3>
                <h2 className="inventory__product">{inventory.productName}</h2>
                <p className="inventory__text">{inventory.description}</p>
              </div>
            </NavLink>
            <div className="inventory__container--order">
              <h3 className="inventory__title">LAST ORDERED</h3>
              <p className="inventory__text">{inventory.lastOrder}</p>
            </div>
            <div className="inventory__container--location">
              <h3 className="inventory__title">LOCATION</h3>
              <p className="inventory__text">{`${inventory.city}, ${inventory.country}`}</p>
            </div>
            <div className="inventory__container--quantity">
              <h3 className="inventory__title">QUANTITY</h3>
              <p className="inventory__text">{inventory.quantity}</p>
            </div>
            <div className="inventory__container--status">
              <h3 className="inventory__title">STATUS</h3>
              {inventory.inStock === true ? (
                <p className="inventory__text">In Stock</p>
              ) : (
                <p className="inventory__text">Out of Stock</p>
              )}
            </div>
          </div>
          <div className="inventory__iconWrapper">
            <img
              className="inventory__kebabIcon"
              src={Icons.kebabDefault}
              alt="inventory kebab icon"
            />
            <img
              className="inventory__kebabIcon--hover"
              src={Icons.kebabActive}
              alt="inventory kebab active icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InventoryMobile;
