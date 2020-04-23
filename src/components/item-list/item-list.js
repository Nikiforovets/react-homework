import React, { Component } from "react";
import PropTypes from "prop-types";
import NetworkError from "../network-error";

import "./item-list.css";
import { element } from "prop-types";

class ItemList extends Component {
  state = {
    error: false
  };

  onItemsLoad = items => {
    this.setState({
      items: items
    });
  };

  createItem(item) {
    return (
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
    const { data } = this.props;
    const elements = !this.state.error
      ? data.map(item => this.createItem(item))
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

export default ItemList;
