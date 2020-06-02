import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import inventory from "./components/pages/Inventory";
import location from "./components/pages/Location";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inventory" component={inventory} />
        <Route path="/location" component={location} />
      </Switch>
    </Router>
  );
}

export default App;
