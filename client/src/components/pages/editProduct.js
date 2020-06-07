import React, { Component } from "react";
import axios from "axios";
import Icons from "../assets";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import Switch from "react-switch";
import DateUtil from "../DateUtil";

const options = [
  { value: "Toronto, CAN", label: "Toronto, CAN" },
  { value: "Toronto, CAN", label: "Toronto, CAN" },
  { value: "Toronto, CAN", label: "Toronto, CAN" },
];

export default class editProduct extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    //const id = "1af0jruup5g0";
    axios.get(`http://localhost:5000/inventory/${id}`).then((response) => {
      //console.log(response);
      this.setState({
        product: response.data.filter((item) => {
          return item.id === id;
        }),
      });
    });
  }

  updateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    // const product = event.target.product.value;
    const lastOrdered = event.target.lastOrdered.value;
    const location = event.target.location.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;
    if (lastOrdered !== "" && quantity !== "") {
      axios
        .put(`/inventory/${this.props.match.params.id}`, {
          briefDescription: description,
          lastOrder: DateUtil.format(lastOrdered),
          quantity,
        })
        .then((response) => {
          console.log(response);
          console.log("product info updated.");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill out the form.");
    }
    form.reset();
  };

  render() {
    return (
      <div className="product">
        {this.state.product.map((item) => {
          return (
            <>
              <div className="product-container1" id={item.id}>
                <div className="product__name">
                  <NavLink to={`/inventory`}>
                    <img src={Icons.backArrow} alt="" />
                  </NavLink>
                  <h2>{item.productName}</h2>
                </div>
              </div>
              <form className="editProduct" onSubmit={this.updateProduct}>
                <div className="product-container2">
                  <div className="product__itemDesc-wrapper">
                    <div className="product__itemDesc">
                      <h3 className="product__itemDesc-title">
                        ITEM DESCRIPTION
                      </h3>
                      <textarea
                        name="description"
                        placeholder={item.detailDescription}
                      ></textarea>
                    </div>
                  </div>
                  <div className="product__itemInfo-wrapper">
                    <div className="product-wrapper">
                      <div className="product__lastOrder">
                        <h3 className="product__lastOrder-title">
                          LAST ORDERED
                        </h3>
                        <input
                          type="date"
                          name="lastOrdered"
                          placeholder={item.lastOrder}
                        />
                      </div>
                      <div className="product__location">
                        <h3 className="product__location-title">LOCATION</h3>
                        <input name="location" placeholder={item.city} />
                      </div>
                    </div>
                    <div className="product__quantity">
                      <h3 className="product__quantity-title">QUANTITY</h3>
                      <input name="quantity" placeholder={item.quantity} />
                    </div>

                    <div className="product__categories">
                      <h3 className="product__categories-title">CATEGORIES</h3>
                      <textarea
                        className="product__categories--text"
                        placeholder={item.category}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="product__btn-container">
                  <button className="product__btn" type="submit">
                    SAVE
                  </button>
                </div>
              </form>
            </>
          );
        })}
      </div>
    );
  }
}
