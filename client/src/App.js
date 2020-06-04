import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Inventory from "./components/pages/Inventory";
import Locations from "./components/pages/Locations";
import NewInventory from "./components/pages/NewInventory";
import NewWarehouse from "./components/pages/NewWarehouse";
import Product from "./components/Product";

class App extends React.Component {
  state = {
    inventoryList: [],
    checked: true,
    newInventory: false,
    newLocation: false,
  };

  inventoryTogglePop = () => {
    this.setState({
      newInventory: !this.state.newInventory,
    });
  };

  locationTogglePop = () => {
    this.setState({
      newLocation: !this.state.newLocation,
    });
  };

  handleChange = (checked) => {
    this.setState({
      checked,
    });
  };

  componentDidMount() {
    axios.get("/inventory").then((response) => {
      this.setState({
        inventoryList: response.data,
      });
    });
  }

  render() {
    const { inventoryList, warehouseList } = this.state;
    return (
      <Router>
        {this.state.newInventory ? (
          <NewInventory
            toggle={this.inventoryTogglePop}
            onChange={this.handleChange}
            checked={this.state.checked}
            inventoryList={inventoryList}
          />
        ) : null}
        {this.state.newLocation ? (
          <NewWarehouse toggle={this.locationTogglePop} />
        ) : null}
        <Header />
        <Switch>
          <Redirect from="/" to="/inventory" exact />
          <Route
            path="/inventory"
            render={(props) => (
              <Inventory
                togglePop={this.inventoryTogglePop}
                inventoryList={inventoryList}
                {...props}
              />
            )}
          />
          <Route
            path="/locations"
            render={(props) => (
              <Locations
                togglePop={this.locationTogglePop}
                warehouseList={warehouseList}
                {...props}
              />
            )}
          />
          <Route path="/product/:id" component={Product} />
          <Redirect from="/product" to="/inventory" exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
