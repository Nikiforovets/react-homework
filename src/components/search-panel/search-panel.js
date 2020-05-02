import React from "react";

import "./search-panel.css";

class SearchPanel extends React.Component {
  state = {
    label: ""
  };

  onChange = e => {
    this.setState({ label: e.target.value });
    this.props.onInput(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onChange}
        value={this.state.label}
      />
    );
  }
}

export default SearchPanel;
