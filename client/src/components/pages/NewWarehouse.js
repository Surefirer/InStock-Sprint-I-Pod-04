import React from "react";
import Select from "react-select";
import axios from "axios";
import { v4 as uuid } from "uuid";
// import SelectInput from "../SelectInput";

class NewWarehouse extends React.Component {
  state = {
    options: [], // options for location dropdown
  };

  // need to be swapped to warehouseList
  componentDidMount() {
    this.props.inventoryList.map((inventory) => {
      const id = inventory.id;
      const city = inventory.city;
      const country = inventory.country;
      const option = {
        id,
        value: `${city}, ${country}`,
        label: `${city}, ${country}`,
      };
      this.state.options.push(option);
      return option;
    }, console.log(this.state.options));
  }

  handleClick = () => {
    this.props.toggle();
  };

  addNewLocation = (event) => {
    event.preventDefault();
    const form = event.target;
    const warehouse = event.target.warehouse.value;
    const address = event.target.address.value;
    const contactName = event.target.name.value;
    const position = event.target.position.value;
    const phoneNumber = event.target.phoneNumber.value;
    const email = event.target.email.value;
    const description = event.target.description.value;
    if (
      warehouse !== "" &&
      address !== "" &&
      contactName !== "" &&
      position !== "" &&
      phoneNumber !== "" &&
      email !== ""
    ) {
      axios
        .post("/locations", {
          id: uuid(),
          name: warehouse,
          address,
          contactName,
          position,
          phoneNumber,
          email,
          categories: description,
        })
        .then((response) => {
          console.log(response);
          console.log("New location added.");
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
        <form className="createNew__form--warehouse">
          <h1 className="createNew__header--warehouse">Add New</h1>

          <div className="createNew__wrapper--input">
            <label className="createNew__label" htmlFor="warehouse">
              WAREHOUSE
            </label>
            <input
              className="createNew__input"
              type="text"
              name="warehouse"
              placeholder="Name & ID"
            />
          </div>
          <div className="createNew__wrapper">
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="address">
                ADDRESS
              </label>
              <input
                className="createNew__input"
                type="text"
                name="address"
                placeholder="Enter Address"
              />
            </div>
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="location">
                LOCATION
              </label>
              <Select
                className="createNew__location"
                classNamePrefix="Select"
                name="location"
                options={this.state.options}
              />
              {/* <SelectInput inventoryList={this.props.inventoryList} /> */}
            </div>
          </div>
          <div className="createNew__wrapper">
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="name">
                CONTACT NAME
              </label>
              <input
                className="createNew__input"
                type="text"
                name="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="position">
                POSITION
              </label>
              <input
                className="createNew__input"
                type="text"
                name="position"
                placeholder="Enter Position"
              />
            </div>
          </div>
          <div className="createNew__wrapper">
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="phoneNumber">
                PHONE NUMBER
              </label>
              <input
                className="createNew__input"
                type="tel"
                name="phoneNumber"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="(000) 000-0000"
              />
            </div>
            <div className="createNew__wrapper--input">
              <label className="createNew__label" htmlFor="email">
                EMAIL
              </label>
              <input
                className="createNew__input"
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <label className="createNew__label" htmlFor="description">
            ITEM DESCRIPTION
          </label>
          <textarea
            className="createNew__descInput"
            type="text"
            name="description"
            placeholder="Use commas to separate each category"
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

export default NewWarehouse;
