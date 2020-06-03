import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./components/pages/Inventory";
import Locations from "./components/pages/Locations";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect from="/" to="/inventory" exact />
        <Route path="/inventory" component={Inventory} />
        <Route path="/locations" component={Locations} />
        <Route path="/product/:id" component={Product} />
        {/* <Redirect from="/product" to="/inventory" exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
