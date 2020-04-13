import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Item from "../item";
import NetworkError from "../network-error";

import "./item-list.css";
import { element } from "prop-types";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    people: [],
    error: false
  };

  constructor() {
    super();
    this.updatePeople();
  }

  onPeopleLoad = people => {
    this.setState({
      people: people
    });
  };

  updatePeople() {
    this.swapiService
      .getAllPeople()
      .then(this.onPeopleLoad)
      .catch(e =>
        this.setState({
          error: true
        })
      );
  }

  createItem(item) {
    return <Item id={item.id} name={item.name} key={item.id} />;
  }

  render() {
    const elements = !this.state.error
      ? this.state.people.map(item => this.createItem(item))
      : null;
    const error = this.state.error ? <NetworkError /> : null;
    return (
      <div>
        <ul className="item-list list-group">{elements}</ul>
        {error}
      </div>
    );
  }
}
