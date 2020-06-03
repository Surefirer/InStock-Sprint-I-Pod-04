import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    //const id = "1af0jruup5g0";
    axios
      .get(`http://localhost:5000/inventory/1af0jruup5g0`)
      .then((response) => {
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
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas magnam
        ipsa at quos voluptatem in, reiciendis error dolores non illum possimus
        sint qui eaque maxime odit expedita porro laborum tempore.
      </h1>
    );
  }
}
