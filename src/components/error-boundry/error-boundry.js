import React from "react";

export default class ErrorBoundry extends React.Component {
  state = {
    error: false
  };
  componentDidCatch() {
    this.setState({ error: true });
  }
  render() {
    console.log(this.props);
    if (this.state.error) {
      return <h1>Error (The death star)</h1>;
    }
    return this.props.children;
  }
}
