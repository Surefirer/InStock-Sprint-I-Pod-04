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
import LocationDetails from "./components/pages/LocationDetails";
import ProductSummary from "./components/pages/ProductSummary";
import EditProduct from "./components/pages/EditProduct";

class App extends React.Component {
  state = {
    inventoryList: [],
    warehouseList: [],
    locationOptions: [],
    locationsList: [],
    checked: true,
    newInventory: false,
    newLocation: false,
    currentTab: "inventory",
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
    axios.get("/locations").then((response) => {
      this.setState({
        locationsList: response.data,
      });
    });
  }

  render() {
    const {
      inventoryList,
      newInventory,
      newLocation,
      locationsList,
    } = this.state;
    return (
      <Router>
        {newInventory ? (
          <NewInventory
            toggle={this.inventoryTogglePop}
            onChange={this.handleChange}
            checked={this.state.checked}
            locationsList={locationsList}
          />
        ) : null}
        {newLocation ? (
          <NewWarehouse
            toggle={this.locationTogglePop}
            inventoryList={inventoryList}
          />
        ) : null}
        <Header
          currentTab={this.state.currentTab}
          changeCurrentTab={(currentTab) => {
            this.setState({
              currentTab: currentTab,
            });
          }}
        />
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
                {...props}
                locationsList={locationsList}
              />
            )}
          />

          <Route
            path="/locationdetails/:id"
            render={(props) => <LocationDetails {...props} />}
          />
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
          <Route path="/product/:id" component={ProductSummary} />
        </Switch>
      </Router>
    );
  }
}

export default App;
