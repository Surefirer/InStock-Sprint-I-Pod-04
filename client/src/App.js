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
import productSummary from "./components/pages/productSummary";
import LocationDetails from "./components/pages/LocationDetails";
import EditProduct from "./components/pages/editProduct";

class App extends React.Component {
  state = {
    inventoryList: [],
    warehouseList: [],
    locationOptions: [],
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
    const { inventoryList, newInventory, newLocation } = this.state;
    return (
      <Router>
        {newInventory ? (
          <NewInventory
            toggle={this.inventoryTogglePop}
            onChange={this.handleChange}
            checked={this.state.checked}
            inventoryList={inventoryList} // testing for dropdown, need to be changed to warehouseList
          />
        ) : null}
        {newLocation ? (
          <NewWarehouse
            toggle={this.locationTogglePop}
            inventoryList={inventoryList} // testing for dropdown, need to be changed to warehouseList
          />
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
              <Locations togglePop={this.locationTogglePop} {...props} />
            )}
          />
          <Route path="/locationdetails" component={LocationDetails} />
          <Redirect from="/product" to="/inventory" exact />
          <Route
            path="/product/edit/:id"
            render={(props) => (
              <EditProduct
                checked={this.state.checked}
                onChange={this.handleChange}
                {...props}
              />
            )}
          />
          <Route path="/product/:id" component={productSummary} />
        </Switch>
      </Router>
    );
  }
}

export default App;
