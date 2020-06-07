import React, { Component } from "react";
import axios from "axios";
import Icons from "../assets";
import { NavLink } from "react-router-dom";

export default class ProductSummary extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    //const id = "1af0jruup5g0";
    axios.get(`http://localhost:5000/inventory/${id}`).then((response) => {
      console.log(response);
      this.setState({
        product: response.data.filter((item) => {
          return item.id === id;
        }),
      });
    });
  }

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

                <div className="product__status">
                  <p>
                    {item.inStock === true ? (
                      <p className="product__status--in">In Stock</p>
                    ) : (
                      <p className="product__status--out">Out of Stock</p>
                    )}
                  </p>
                </div>
              </div>
              <div className="product-container2">
                <div className="product__itemDesc-wrapper">
                  <div className="product__itemDesc">
                    <h3 className="product__itemDesc-title">
                      ITEM DESCRIPTION
                    </h3>
                    <p>{item.detailDescription}</p>
                  </div>
                </div>
                <div className="product__itemInfo-wrapper">
                  <div className="product-wrapper">
                    <div className="product__lastOrder">
                      <h3 className="product__lastOrder-title">LAST ORDERED</h3>
                      <p>{item.lastOrder}</p>
                    </div>
                    <div className="product__location">
                      <h3 className="product__location-title">LOCATION</h3>
                      <p>
                        {item.city},{item.country}
                      </p>
                    </div>
                  </div>
                  <div className="product__quantity">
                    <h3 className="product__quantity-title">QUANTITY</h3>
                    <p>{item.quantity}</p>
                  </div>
                  <div className="product__categories">
                    <h3 className="product__categories-title">CATEGORIES</h3>
                    <p className="product__categories--text">{item.category}</p>
                  </div>
                </div>
              </div>
              <div className="product__btn-container">
                <div className="product__btn">
                  <button>EDIT</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
