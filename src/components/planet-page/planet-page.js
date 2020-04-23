import React from "react";
import ErrorButton from "../error-button";
import { PlanetDetails, PlanetList } from "../sw-conponents";
import { withComponentError } from "../../hocs";
import Row from "../row";
import { withRouter } from "react-router-dom";

class PlanetPage extends React.Component {
  render() {
    const { match, history } = this.props;
    const id = match.params.id;
    const planetList = (
      <PlanetList
        onSelectedItem={id => {
          history.push(`/planets/${id}`);
        }}
      />
    );
    const planetDetails = withComponentError(<PlanetDetails itemId={id} />);
    return (
      <div>
        <ErrorButton />
        <Row left={planetList} right={planetDetails} />
      </div>
    );
  }
}

export default withRouter(PlanetPage);
