import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../assets";
import axios from "axios";

class LocationDetails extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios.get(`http://localhost:5000/locations/${id}`).then((response) => {
      console.log(response);
      this.setState({
        details: response.data.filter((item) => {
          return item.id === id;
        }),
      });
      console.log(this.state.details);
    });
  }

  render() {
    return (
      <>
        <div className="locationdetails-top">
          {this.state.details.map((d) => {
            return (
              <>
                <div
                  className="locationdetails-top-container1"
                  id="the item id"
                >
                  <div className="locationdetails-top__name">
                    <NavLink to={`/locations`}>
                      <img src={Icons.backArrow} alt="" />
                    </NavLink>
                    <h2>{d.name}</h2>
                  </div>
                </div>

                <div className="locationdetails-top-container2">
                  <div className="locationdetails-top__itemDesc-wrapper">
                    <div className="locationdetails-top__itemDesc">
                      <h3 className="locationdetails-top__itemDesc-title">
                        ADDRESS
                      </h3>
                      <p>{d.address}</p>
                      <p></p>
                    </div>
                  </div>
                  <div className="locationdetails-top__itemInfo-wrapper">
                    <div className="locationdetails-top-wrapper">
                      <div className="locationdetails-top__lastOrder">
                        <h3 className="locationdetails-top__lastOrder-title">
                          CONTACT
                        </h3>
                        <p>
                          {d.contactName} <br />
                          {d.position}
                        </p>
                        <p>
                          <i>
                            {d.phoneNumber} <br /> {d.email}
                          </i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="locationdetails-bottom__bodyMobile">
                  <div
                    className="locationdetails-bottom__wrapperMobile"
                    key="key"
                  >
                    <div className="locationdetails-bottom__container">
                      <div className="locationdetails-bottom__container--item">
                        <h3 className="locationdetails-bottom__title">ITEM</h3>
                        <h2 className="locationdetails-bottom__product">
                          Product Name Here
                        </h2>
                        <p className="locationdetails-bottom__text">
                          Here is a very brief description of the product in the
                          locationdetails-bottom...
                        </p>
                      </div>
                      <div className="locationdetails-bottom__container--order">
                        <h3 className="locationdetails-bottom__title">
                          LAST ORDERED
                        </h3>
                        <p className="locationdetails-bottom__text">
                          05/24/2018
                        </p>
                      </div>
                      <div className="locationdetails-bottom__container--location">
                        <h3 className="locationdetails-bottom__title">
                          LOCATION
                        </h3>
                        <p className="locationdetails-bottom__text">
                          Toronto, CAN
                        </p>
                      </div>
                      <div className="locationdetails-bottom__container--quantity">
                        <h3 className="locationdetails-bottom__title">
                          QUANTITY
                        </h3>
                        <p className="locationdetails-bottom__text">12,000</p>
                      </div>
                      <div className="locationdetails-bottom__container--status">
                        <h3 className="locationdetails-bottom__title">
                          STATUS
                        </h3>
                        <p className="locationdetails-bottom__text">In Stock</p>
                      </div>
                    </div>
                    <div className="locationdetails-bottom__iconWrapper">
                      <img
                        className="locationdetails-bottom__kebabIcon"
                        src={Icons.kebabDefault}
                        alt="locationdetails-bottom kebab icon"
                      />
                      <img
                        className="locationdetails-bottom__kebabIcon--hover"
                        src={Icons.kebabActive}
                        alt="locationdetails-bottom kebab active icon"
                      />
                      <button className="locationdetails-bottom__remove">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="locationdetails-bottom__bodyTablet">
                  <div className="locationdetails-bottom__titleWrapper">
                    <h3 className="locationdetails-bottom__title locationdetails-bottom__item">
                      ITEM
                    </h3>
                    <h3 className="locationdetails-bottom__title locationdetails-bottom__order">
                      LAST ORDERED
                    </h3>
                    <h3 className="locationdetails-bottom__title  locationdetails-bottom__location">
                      LOCATION
                    </h3>
                    <h3 className="locationdetails-bottom__title locationdetails-bottom__quantity">
                      QUANTITY
                    </h3>
                    <h3 className="locationdetails-bottom__title locationdetails-bottom__status">
                      STATUS
                    </h3>
                  </div>
                  <div
                    className="locationdetails-bottom__contentWrapper"
                    key="id"
                  >
                    <div className="locationdetails-bottom__item">
                      <h2 className="locationdetails-bottom__product">
                        Product Name Here
                      </h2>
                      <p className="locationdetails-bottom__text">
                        Here is a very brief description of the product in the
                        inventory...
                      </p>
                    </div>

                    <p className="locationdetails-bottom__text locationdetails-bottom__order">
                      05/24/2018
                    </p>
                    <p className="locationdetails-bottom__text locationdetails-bottom__location">
                      Toronto, CAN
                    </p>
                    <p className="locationdetails-bottom__text locationdetails-bottom__quantity">
                      12,000
                    </p>

                    <p className="locationdetails-bottom__text">In Stock</p>

                    <div className="locationdetails-bottom__iconWrapper">
                      <img
                        className="locationdetails-bottom__kebabIcon"
                        src={Icons.kebabDefault}
                        alt="locationdetails-bottom kebab default icon"
                      />
                      <img
                        className="locationdetails-bottom__kebabIcon--hover"
                        src={Icons.kebabActive}
                        alt="locationdetails-bottom kebab active icon"
                      />
                      <button className="locationdetails-bottom__remove">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default LocationDetails;
