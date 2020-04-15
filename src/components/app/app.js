import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorButton from "../error-button";

import "./app.css";

class App extends React.Component {
  state = {
    selectedItem: null,
    error: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  onSelectedItem = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    if (this.state.error) {
      return <h1>Error (The death star)</h1>;
    }
    return (
      <div>
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelectedItem={this.onSelectedItem} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItem={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
