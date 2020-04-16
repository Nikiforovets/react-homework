import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page";
import ItemDetails from "../item-details";
import ItemList from "../item-list";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import "./app.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null
  };

  onSelectedItem = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const peopleList = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onSelectedItem={this.onSelectedItem}
      >
        {item => `${item.name} | ${item.gender}`}
      </ItemList>
    );
    const peopleDetails = (
      <ErrorBoundry>
        <ItemDetails
          selectedItem={this.state.selectedItem}
          getData={this.swapiService.getPerson}
          getImage={id => this.swapiService.getPersonImage(id)}
        >
          <Record label="Name" field="name" />
          <Record label="Gender" field="gender" />
          <Record label="Birth year" field="birthYear" />
          <Record label="Eye Color" field="eyeColor" />
        </ItemDetails>
      </ErrorBoundry>
    );
    return (
      <div>
        <ErrorBoundry>
          <Header />
          <RandomPlanet />
          <ErrorButton />
          <Row left={peopleList} right={peopleDetails} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
