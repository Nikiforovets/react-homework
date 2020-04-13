import React, { Component } from "react";

import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import NetworkError from "../network-error";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    networkError: false
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
      networkError: false
    });
  };

  updatePlanet() {
    const id = 100;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(e => {
        this.setState({
          networkError: true
        });
      });
  }

  render() {
    const { planet, loading, networkError } = this.state;
    const spinner = loading && !networkError ? <Spinner /> : null;
    const error = networkError ? <NetworkError /> : null;
    const content =
      !loading && !networkError ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {error}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
