import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li
        className="list-group-item"
        onClick={() => this.props.onSelectedItem(this.props.id)}
      >
        {this.props.name}
      </li>
    );
  }
}

export default Item;
