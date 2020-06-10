import React, { Component } from "react";
import axios from "axios";
import Icons from "../assets";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import DateUtil from "../DateUtil";

class EditProduct extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5000/inventory/${id}`).then((response) => {
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
    const lastOrdered = event.target.lastOrdered.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;
    // const stockStatus = event.target.stockStatus.value;
    const category = event.target.category.value;
    if (lastOrdered !== "" && quantity !== "") {
      axios
        .patch(`/inventory/${this.props.match.params.id}`, {
          id: this.state.product[0].id,
          warehouseID: this.state.product[0].warehouseID,
          productName: this.state.product[0].productName,
          briefDescription: description,
          detailDescription: this.state.product[0].detailDescription,
          lastOrder: DateUtil.format(lastOrdered),
          city: this.state.product[0].city,
          country: this.state.product[0].country,
          quantity: quantity,
          inStock: this.props.checked,
          category: category,
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

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="editProduct">
        {this.state.product.map((item) => {
          return (
            <>
              <div className="editProduct-container1">
                <div className="editProduct__name">
                  <NavLink to={`/inventory`}>
                    <img src={Icons.backArrow} alt="" />
                  </NavLink>
                  <h2 name="productName" className="editProduct__name--text">
                    {item.productName}
                  </h2>
                </div>
              </div>
              <form
                className="editProduct__form"
                onSubmit={this.updateProduct}
                key={item.id}
              >
                <div className="editProduct-container2 editProduct-container2--ep">
                  <div className="editProduct__itemDesc-wrapper">
                    <div className="editProduct__itemDesc editProduct__itemDesc--ep">
                      <h3 className="editProduct__itemDesc-title editProduct__itemDesc-title--ep editProduct__title">
                        ITEM DESCRIPTION
                      </h3>
                      <textarea
                        name="description"
                        placeholder={item.detailDescription}
                      ></textarea>
                    </div>
                  </div>
                  <div className="editProduct__itemInfo-wrapper">
                    <div className="editProduct-wrapper editProduct-wrapper__ep">
                      <div className="editProduct__lastOrder">
                        <h3 className="editProduct__lastOrder-title editProduct__title">
                          LAST ORDERED
                        </h3>
                        <input
                          type="date"
                          name="lastOrdered"
                          placeholder={item.lastOrder}
                        />
                      </div>
                      <div className="editProduct__location">
                        <h3 className="editProduct__location-title editProduct__title">
                          LOCATION
                        </h3>
                        <input name="location" placeholder={item.city} />
                      </div>
                    </div>
                    <div className="editProduct-wrapper">
                      <div className="editProduct__quantity">
                        <h3 className="editProduct__quantity-title editProduct__title">
                          QUANTITY
                        </h3>
                        <input name="quantity" placeholder={item.quantity} />
                      </div>

                      <div className="editProduct__editPageStatus">
                        <h3 className="editProduct__editPageStatus-title editProduct__title">
                          STATUS
                        </h3>
                        <div className="editProduct__editPageStatus-wrapper">
                          <div className="editProduct__editPageStatus-show">
                            {this.props.checked === true ? (
                              <p className="editProduct__editPageStatus-text">
                                In Stock
                              </p>
                            ) : (
                              <p className="editProduct__editPageStatus-text">
                                Out of Stock
                              </p>
                            )}
                            <Switch
                              className="editProduct__editPageStatus-toggle"
                              name="stockStatus"
                              onChange={this.props.onChange}
                              checked={this.props.checked}
                              uncheckedIcon={false}
                              checkedIcon={false}
                              offColor="#afafaf"
                              onColor="#69b02f"
                              height={24}
                              width={40}
                              handleDiameter={25}
                              boxShadow="0 0 2px 2px #e1e1e1"
                              activeBoxShadow="0 0 2px 2px #e1e1e1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="editProduct__categories editProduct__categories--ep">
                      <h3 className="editProduct__categories-title editProduct__categories-title--ep editProduct__title">
                        CATEGORIES
                      </h3>
                      <textarea
                        name="category"
                        className="editProduct__categories--text editProduct__categories--textEp"
                        placeholder={item.category}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="editProduct__btn-container editProduct__btn-container--ep">
                  <button className="product__btn" type="submit">
                    SAVE
                  </button>
                  <p
                    className="editProduct__btn-cancel"
                    onClick={this.handleBack}
                  >
                    CANCEL
                  </p>
                </div>
              </form>
            </>
          );
        })}
      </div>
    );
  }
}

export default EditProduct;
