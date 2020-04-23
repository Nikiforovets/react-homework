import React from "react";
import { PersonDetails } from "../sw-conponents";
import { withRouter } from "react-router-dom";

class PersonPage extends React.Component {
  render() {
    const { match, location, history } = this.props;
    const { id } = match.params;
    return <PersonDetails itemId={id} />;
  }
}

export default PersonPage;
