import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../assets";
import axios from "axios";
import LocationDetailsProduct from "./LocationDetailsProduct";

class LocationDetails extends Component {
  state = {
    details: [],
    product: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios.get(`http://localhost:5000/locations/${id}`).then((response) => {
      console.log(response);
      this.setState({
        details: response.data.filter((d) => {
          return d.id === id;
        }),
      });
      console.log(this.state.details);
    });
    const id2 = this.props.match.params.id;
    console.log(id2);
    axios
      .get(`http://localhost:5000/locationsinventory/${id2}`)
      .then((response) => {
        console.log(response);
        this.setState({
          product: response.data.filter((p) => {
            return p.warehouseID === id2;
          }),
        });
        console.log(this.state.product);
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
              </>
            );
          })}
          <LocationDetailsProduct theproduct={this.state.product} />
        </div>
      </>
    );
  }
}

export default LocationDetails;
