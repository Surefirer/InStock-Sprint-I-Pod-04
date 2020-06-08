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
            {props.locationsList.map((locations) => (
              <div className="locations__container--item" key={locations.id}>
                <h3 className="locations__titleMobile">{locations.name}</h3>
                <p className="locations__text">{locations.address}</p>
                <p className="locations__text">
                  {locations.contactName} <br /> <i>{locations.position}</i>
                </p>
                <p className="locations__text">
                  {locations.phoneNumber} <br /> {locations.email}
                </p>
                <p className="locations__text">{locations.categories}</p>
              </div>
            ))}
          </div>
          <Link to="/locationdetails">
            <img
              className="locations__rightArrowIcon"
              src={Icons.rightArrow}
              alt="locations kebab icon"
            />
          </Link>
        </div>
        <div className="locations__bodyTablet">
          <div className="locations__contentWrapperTablet">
            <div className="locations__item">
              {props.locationsList.map((l) => (
                <div className="locations__warehouseTitleContainer">
                  <h2 className="locations__titleTablet">{l.name}</h2>
                  <p className="locations__text">{l.address}</p>
                </div>
              ))}
              <div className="locations__imageContainer">
                <Link to="/locationdetails">
                  <img
                    className="locations__rightArrowIcon"
                    src={Icons.rightArrow}
                    alt="locations right arrow icon"
                  />
                </Link>
              </div>
            </div>
            {props.locationsList.map((l) => (
              <div className="locations__textContainer">
                <p className="locations__textTablet locations__category">
                  {l.contactName} <br /> <i>{l.position}</i>
                </p>
                <p className="locations__textTablet locations__contact">
                  {l.phoneNumber} {l.email}
                </p>
                <p className="locations__textTablet locations__categories">
                  {l.categories}
                </p>
              </div>
            ))}
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
          {props.locationsList.map((l) => (
            <div className="locations__contentWrapper">
              <div className="locations__item">
                <h2 className="locations__warehouse">{l.name}</h2>
                <p className="locations__text locations__address">
                  {l.address}
                </p>
              </div>
              <p className="locations__text locations__contact">
                {l.contactName}
                <br /> <i>{l.position}</i>
              </p>
              <p className="locations__text locations__contactinfo">
                {l.phoneNumber} {l.email}
              </p>
              <p className="locations__text locations__category">
                {l.categories}
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
          ))}
        </div>
      </section>
    </>
  );
}

export default Locations;
