import React from "react";
import Select from "react-select";
// import Icons from "../assets";

class CreateNew extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="createNew">
        <form className="createNew__container">
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
            <label className="createNew__label">STATUS</label>
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
