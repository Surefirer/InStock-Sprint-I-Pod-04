import React from "react";
import Select from "react-select";

// need to be replaced with list of all warehouses from the back-end
const options = [
  { value: "Toronto, CAN", label: "Toronto, CAN" },
  { value: "Toronto, CAN", label: "Toronto, CAN" },
  { value: "Toronto, CAN", label: "Toronto, CAN" },
];

class NewWarehouse extends React.Component {
  handleClick = () => {
    this.props.toggle();
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
                options={options}
              />
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
                type="number"
                name="phoneNumber"
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
