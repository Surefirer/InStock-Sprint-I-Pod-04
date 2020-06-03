import React from "react";
import Icons from "../assets";

class Inventory extends React.Component {
  render() {
    return (
      <>
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
          <div className="inventory__bodyMobile">
            <div className="inventory__container">
              <div className="inventory__container--item">
                <h3 className="inventory__title">ITEM</h3>
                <h2 className="inventory__product">Product Name Here</h2>
                <p className="inventory__text">
                  Here is a very brief description of the product in the
                  inventory.
                </p>
              </div>
              <div className="inventory__container--order">
                <h3 className="inventory__title">LAST ORDERED</h3>
                <p className="inventory__text">05/24/2018</p>
              </div>
              <div className="inventory__container--location">
                <h3 className="inventory__title">LOCATION</h3>
                <p className="inventory__text">Toronto, CAN</p>
              </div>
              <div className="inventory__container--quantity">
                <h3 className="inventory__title">QUANTITY</h3>
                <p className="inventory__text">12,000</p>
              </div>
              <div className="inventory__container--status">
                <h3 className="inventory__title">STATUS</h3>
                <p className="inventory__text">In Stock</p>
              </div>
            </div>
            <img
              className="inventory__kebabIcon"
              src={Icons.kebabDefault}
              alt="inventory kebab icon"
            />
          </div>
          <div className="inventory__bodyTablet">
            <div className="inventory__titleWrapper">
              <h3 className="inventory__title inventory__item">ITEM</h3>
              <h3 className="inventory__title inventory__order">
                LAST ORDERED
              </h3>
              <h3 className="inventory__title  inventory__location">
                LOCATION
              </h3>
              <h3 className="inventory__title inventory__quantity">QUANTITY</h3>
              <h3 className="inventory__title inventory__status">STATUS</h3>
            </div>
            <div className="inventory__contentWrapper">
              <div className="inventory__item">
                <h2 className="inventory__product">Product Name Here</h2>
                <p className="inventory__text">
                  Here is a very brief description of the product in the
                  inventory.
                </p>
              </div>
              <p className="inventory__text inventory__order">05/24/2018</p>
              <p className="inventory__text inventory__location">
                Toronto, CAN
              </p>
              <p className="inventory__text inventory__quantity">12,000</p>
              <p className="inventory__text inventory__status">In Stock</p>
              <img
                className="inventory__kebabIcon"
                src={Icons.kebabDefault}
                alt="inventory kebab icon"
              />
            </div>
          </div>
        </section>
        <button className="inventory__button">
          <img
            className="inventory__button--addIcon"
            src={Icons.addIcon}
            alt="create new inventory button"
          />
        </button>
      </>
    );
  }
}

export default Inventory;
