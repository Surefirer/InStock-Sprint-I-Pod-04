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
import CreateNew from "./components/pages/CreateNew";
import Icons from "./components/assets";

class App extends React.Component {
  state = {
    inventoryList: [],
    checked: true,
    seen: false,
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
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
    const { inventoryList } = this.state;
    return (
      <Router>
        <div onClick={this.togglePop}>
          <button className="inventory__button">
            <img
              className="inventory__button--addIcon"
              src={Icons.addIcon}
              alt="create new inventory button"
            />
          </button>
        </div>
        {this.state.seen ? (
          <CreateNew
            toggle={this.togglePop}
            onChange={this.handleChange}
            checked={this.state.checked}
          />
        ) : null}
        <Header />
        <Switch>
          <Redirect from="/" to="/inventory" exact />
          <Route
            path="/inventory"
            render={(props) => (
              <Inventory inventoryList={inventoryList} {...props} />
            )}
          />
          <Route path="/locations" component={Locations} />
        </Switch>
      </Router>
    );
  }
}

export default App;
