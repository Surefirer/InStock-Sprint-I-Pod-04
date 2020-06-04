import React from "react";
import Icons from "../assets";

class Location extends React.Component {
  render() {
    return (
      <>
        <section className="locations">
          <div className="locations__wrapper">
            <h1 className="locations__header">Locations</h1>
            <div className="locations__search">
              <input
                className="locations__search--input"
                type="text"
                name="searchInput"
                id="searchInput"
                placeholder="Search"
              />
              <img
                className="locations__search--icon"
                src={Icons.searchIcon}
                alt="search icon"
              />
            </div>
          </div>
          <div className="locations__bodyMobile">
            <div className="locations__container">
              <div className="locations__container--item">
                <h3 className="locations__titleMobile">Warehouse Number 1</h3>
                <p className="locations__text">469 King St W, Toronto, ON</p>
                <p className="locations__text">
                  Mara Weinberg <br /> <i>Warehouse Manager</i>
                </p>
                <p className="locations__text">
                  +1 416 678 2345 <br /> weinberg@instack.com
                </p>
                <p className="locations__text">
                  Industrial, Automotive, Heavy, Mechanical, Engineering,
                  Transportation
                </p>
              </div>
            </div>
            <img
              className="locations__rightArrowIcon"
              src={Icons.rightArrow}
              alt="locations kebab icon"
            />
          </div>
          <div className="locations__bodyTablet">
            <div className="locations__contentWrapperTablet">
              <div className="locations__item">
                <div className="locations__warehouseTitleContainer">
                  <h2 className="locations__titleTablet">Warehouse Number 1</h2>
                  <p className="locations__text">469 King St W, Toronto, ON</p>
                </div>
                <div className="locations__imageContainer">
                  <img
                    className="locations__rightArrowIcon"
                    src={Icons.rightArrow}
                    alt="locations right arrow icon"
                  />
                </div>
              </div>
              <div className="locations__textContainer">
                <p className="locations__textTablet locations__quantity">
                  Mara Weinberg <br /> <i>Warehouse Manager</i>
                </p>
                <p className="locations__textTablet locations__order">
                  +1 416 678 2345 weinberg@instack.com
                </p>
                <p className="locations__textTablet locations__status">
                  Industrial, Automotive, Heavy, <br /> Mechanical, Engineering,
                  Transportation
                </p>
              </div>
            </div>
          </div>
        </section>
        <button className="locations__button">
          <img
            className="locations__button--addIcon"
            src={Icons.addIcon}
            alt="create new location button"
          />
        </button>
      </>
    );
  }
}

export default Location;
