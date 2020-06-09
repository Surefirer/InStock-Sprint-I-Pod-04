import React from "react";
import Select from "react-select";
import Switch from "react-switch";
import axios from "axios";
import { v4 as uuid } from "uuid";
import DateUtil from "../DateUtil";

class NewInventory extends React.Component {
  state = {
    options: [], // options for location dropdown
  };

  componentDidMount() {
    this.props.locationsList.map((location) => {
      const name = location.name;
      const id = location.id;
      const option = {
        id,
        value: name,
        label: name,
      };
      this.state.options.push(option);
      return option;
    }, console.log(this.state.options));
  }

  handleClick = () => {
    this.props.toggle();
  };

  createNewInventory = (event) => {
    event.preventDefault();
    const form = event.target;
    const product = event.target.product.value;
    const lastOrdered = event.target.lastOrdered.value;
    // const location = event.target.location.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;
    if (product !== "" && lastOrdered !== "" && quantity !== "") {
      axios
        .post("/inventory", {
          id: uuid(),
          productName: product,
          briefDescription: description,
          lastOrder: DateUtil.format(lastOrdered),
          quantity,
        })
        .then((response) => {
          console.log(response);
          console.log("New inventory created.");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill out the form.");
    }
    form.reset();
  };

  render() {
    return (
      <div className="createNew">
        <form className="createNew__form" onSubmit={this.createNewInventory}>
          <h1 className="createNew__header">Create New</h1>
          <div className="createNew__wrapper">
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="product">
                PRODUCT
              </label>
              <input
                className="createNew__input"
                type="text"
                name="product"
                placeholder="Item Name"
              />
            </div>
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="lastOrdered">
                LAST ORDERED
              </label>
              <input
                className="createNew__input"
                type="date"
                name="lastOrdered"
                placeholder="yyyy-mm-dd"
              />
            </div>
          </div>
          <label className="createNew__label" htmlFor="location">
            LOCATION
          </label>
          <Select
            className="createNew__location"
            classNamePrefix="Select"
            name="location"
            options={this.state.options}
          />
          <div className="createNew__wrapper">
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="quantity">
                QUANTITY
              </label>
              <input
                className="createNew__input"
                type="number"
                name="quantity"
                placeholder="0"
              />
            </div>
            <div className="createNew__wrapper--input">
              <label className="createNew__label">STATUS</label>
              <div className="createNew__status">
                {this.props.checked === true ? (
                  <p className="createNew__status--text">In Stock</p>
                ) : (
                  <p className="createNew__status--text">Out of Stock</p>
                )}
                <Switch
                  className="createNew__status--toggle"
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
          <label className="createNew__label" htmlFor="description">
            ITEM DESCRIPTION
          </label>
          <textarea
            className="createNew__descInput"
            type="text"
            name="description"
            placeholder="(Optional)"
          />
          <div className="createNew__wrapper--btn">
            <button className="createNew__btn" type="submit" id="upload-btn">
              SAVE
            </button>
            <p className="createNew__cancel" onClick={this.handleClick}>
              CANCEL
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default NewInventory;
