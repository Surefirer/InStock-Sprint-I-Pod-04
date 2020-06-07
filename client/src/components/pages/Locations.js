import React from "react";
import Icons from "../assets";
import { Link } from "react-router-dom";

function Locations(props) {
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
              <p className="locations__textTablet locations__category">
                Mara Weinberg <br /> <i>Warehouse Manager</i>
              </p>
              <p className="locations__textTablet locations__contact">
                +1 416 678 2345 weinberg@instack.com
              </p>
              <p className="locations__textTablet locations__categories">
                Industrial, Automotive, Heavy, <br /> Mechanical, Engineering,
                Transportation
              </p>
            </div>
          </div>
        </div>
        <div className="locations__bodyDesktop">
          <div className="locations__titleWrapper">
            <h3 className="locations__title locations__item">WAREHOUSE</h3>
            <h3 className="locations__title locations__contact">CONTACT</h3>
            <h3 className="locations__title  locations__contactinfo">
              CONTACT INFORMATION
            </h3>
            <h3 className="locations__title locations__category">CATEGORIES</h3>
          </div>
          <div className="locations__contentWrapper">
            <div className="locations__item">
              <h2 className="locations__warehouse">Warehouse Number 1</h2>
              <p className="locations__text locations__address">
                469 King St W, Toronto, ON
              </p>
            </div>
            <p className="locations__text locations__contact">
              Mara Weinberg
              <br /> <i>Warehouse Manager</i>
            </p>
            <p className="locations__text locations__contactinfo">
              +1 416 678 2345 weinberg@instack.com
            </p>
            <p className="locations__text locations__category">
              Industrial, Automotive, Heavy, <br /> Mechanical, Engineering,
              Transportation
            </p>
            <div className="locations__iconWrapper">
              <Link to="/locationdetails">
                <img
                  className="locations__rightArrowIcon"
                  src={Icons.rightArrow}
                  alt="locations right arrow icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Locations;
