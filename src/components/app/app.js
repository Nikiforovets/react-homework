import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
//import ItemList from "../item-list";
import { SwapiServiceProvider, SwapiServiceConsumer } from "../../cotext";
import {
  PersonList,
  PersonDetails,
  PlanetList,
  PlanetDetails,
  StarshipDetails,
  StarshipList
} from "../sw-conponents";
import { withComponentError } from "../../hocs";
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

export { Record };

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    selectedPlanet: null,
    selectedStarship: null
  };

  onSelectedPerson = id => {
    this.setState({
      selectedPerson: id
    });
  };

  onSelectedPlanet = id => {
    this.setState({
      selectedPlanet: id
    });
  };

  onSelectedStarship = id => {
    this.setState({
      selectedStarship: id
    });
  };

  render() {
    const peopleList = <PersonList onSelectedItem={this.onSelectedPerson} />;
    const peopleDetails = withComponentError(
      <PersonDetails itemId={this.state.selectedPerson} />
    );

    const planetList = <PlanetList onSelectedItem={this.onSelectedPlanet} />;
    const planetDetails = withComponentError(
      <PlanetDetails itemId={this.state.selectedPlanet} />
    );

    const starshipList = (
      <StarshipList onSelectedItem={this.onSelectedStarship} />
    );
    const starshipDetails = withComponentError(
      <StarshipDetails itemId={this.state.selectedStarship} />
    );

    return withComponentError(
      <SwapiServiceProvider value={this.swapiService}>
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <Row left={peopleList} right={peopleDetails} />
        <Row left={planetList} right={planetDetails} />
        <Row left={starshipList} right={starshipDetails} />
      </SwapiServiceProvider>
    );
  }
}

export default App;
