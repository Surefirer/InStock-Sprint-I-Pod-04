import React from "react";
import Select from "react-select";
import Switch from "react-switch";

// need to be replaced with list of all warehouses from the back-end
const options = [
  { value: "Toronto, CAN", label: "Toronto, CAN" },
  { value: "Toronto, CAN", label: "Toronto, CAN" },
  { value: "Toronto, CAN", label: "Toronto, CAN" },
];

class CreateNew extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="createNew">
        <form className="createNew__form">
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
            options={options}
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
                  onColor="#4fa72d"
                  height={24}
                  width={40}
                  handleDiameter={26}
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

export default CreateNew;
