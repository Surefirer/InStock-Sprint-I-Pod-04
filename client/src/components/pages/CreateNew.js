import React from "react";
// import Icons from "../assets";

class CreateNew extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Create New</h3>
            <label>
              PRODUCT
              <input type="text" name="product" placeholder="Item Name" />
            </label>
            <label>
              PRODUCT
              <input type="text" name="product" placeholder="yyyy-mm-dd" />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNew;
