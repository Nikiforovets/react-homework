import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Item from "../item";
import NetworkError from "../network-error";

import "./item-list.css";
import { element } from "prop-types";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    items: [],
    error: false
  };

  componentDidMount() {
    this.props
      .getData()
      .then(this.onItemsLoad)
      .catch(e =>
        this.setState({
          error: true
        })
      );
  }

  onItemsLoad = items => {
    this.setState({
      items: items
    });
  };

  createItem(item) {
    return (
      // <Item
      //   id={item.id}
      //   name={item.name}
      //   key={item.id}
      //   onSelectedItem={this.props.onSelectedItem}
      // />
      <li
        className="list-group-item"
        key={item.id}
        onClick={() => this.props.onSelectedItem(item.id)}
      >
        {this.props.children(item)}
      </li>
    );
  }

  render() {
    const elements = !this.state.error
      ? this.state.items.map(item => this.createItem(item))
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
