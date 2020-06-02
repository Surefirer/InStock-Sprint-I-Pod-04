import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Inventory from "I./components/pages/Inventory";
import Location from "./components/pages/Location";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/location" component={Location} />
      </Switch>
    </Router>
  );
}

export default App;
