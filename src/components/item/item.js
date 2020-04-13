import React from "react";

class Item extends React.Component {
  render() {
    return <li className="list-group-item">{this.props.name}</li>;
  }
}

export default Item;
