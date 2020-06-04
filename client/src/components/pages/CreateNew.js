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
            <label className="createNew__label">
              PRODUCT
              <input
                className="createNew__input"
                type="text"
                name="product"
                placeholder="Item Name"
              />
            </label>
            <label className="createNew__label">
              LAST ORDERED
              <input
                className="createNew__input"
                type="date"
                name="lastOrdered"
                placeholder="yyyy-mm-dd"
              />
            </label>
          </div>
          <label className="createNew__label">
            LOCATION
            <Select
              className="createNew__location"
              classNamePrefix="Select"
              name="location"
              options={options}
            />
          </label>
          <div className="createNew__wrapper">
            <label className="createNew__label">
              QUANTITY
              <input
                className="createNew__input"
                type="number"
                name="quantity"
                placeholder="0"
              />
            </label>
            <label className="createNew__label">
              STATUS
              <div className="createNew__status">
                <p className="createNew__status--text">In Stock</p>
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
            </label>
          </div>
          <label className="createNew__label">
            ITEM DESCRIPTION
            <textarea
              className="createNew__descInput"
              type="text"
              name="description"
              placeholder="(Optional)"
            />
          </label>
          <div className="createNew__wrapper--btn">
            <span className="createNew__cancel" onClick={this.handleClick}>
              CANCEL
            </span>
            <button className="createNew__btn" type="submit" id="upload-btn">
              SAVE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNew;
