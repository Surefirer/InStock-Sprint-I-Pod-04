import React from "react";
import Icons from "../assets";
import { NavLink } from "react-router-dom";

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
          {props.locationsList.map((l) => (
            <>
              <div className="locations__container">
                <div className="locations__container--item" key={l.id}>
                  <h3 className="locations__titleMobile">{l.name}</h3>
                  <p className="locations__text">{l.address}</p>
                  <p className="locations__text">
                    {l.contactName} <br /> <i>{l.position}</i>
                  </p>
                  <p className="locations__text">
                    {l.phoneNumber} <br /> {l.email}
                  </p>
                  <p className="locations__text">{l.categories}</p>
                </div>
                <div className="locations__arrowWrapper">
                  <NavLink to={`/locationdetails/${l.id}`}>
                    <img
                      className="locations__rightArrowIcon"
                      src={Icons.rightArrow}
                      alt="locations kebab icon"
                    />
                  </NavLink>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="locations__bodyTablet">
          {props.locationsList.map((l) => (
            <div className="locations__contentWrapperTablet">
              <div className="locations__contentWrapperTablet--text">
                <div className="locations__item">
                  <div
                    className="locations__warehouseTitleContainer"
                    key={l.id}
                  >
                    <h2 className="locations__titleTablet">{l.name}</h2>
                    <p className="locations__text">{l.address}</p>
                  </div>
                </div>
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
              </div>
              <div className="locations__imageContainer">
                <NavLink to={`/locationdetails/${l.id}`}>
                  <img
                    className="locations__rightArrowIcon"
                    src={Icons.rightArrow}
                    alt="locations right arrow icon"
                  />
                </NavLink>
              </div>
            </div>
          ))}
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
            <div className="locations__contentWrapper" key={l.id}>
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
                <NavLink to={`/locationdetails/${l.id}`}>
                  <img
                    className="locations__rightArrowIcon"
                    src={Icons.rightArrow}
                    alt="locations right arrow icon"
                  />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Locations;
