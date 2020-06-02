import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Inventory from "./components/pages/Inventory";
import Locations from "./components/pages/Locations";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </Router>
  );
}

export default App;
