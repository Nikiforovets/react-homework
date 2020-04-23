import React from "react";
import { StarshipDetails } from "../sw-conponents";
import { withRouter } from "react-router-dom";

class PersonPage extends React.Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    return <StarshipDetails itemId={id} />;
  }
}

export default PersonPage;
