import React from "react";
import ErrorButton from "../error-button";
import { StarshipDetails, StarshipList } from "../sw-conponents";
import { withComponentError } from "../../hocs";
import Row from "../row";
import { withRouter } from "react-router-dom";

class StarshipPage extends React.Component {
  state = {
    selectedStarship: null
  };

  onSelectedStarship = id => {
    this.setState({
      selectedStarship: id
    });
  };

  render() {
    const { history } = this.props;
    const starshipList = (
      <StarshipList onSelectedItem={id => history.push(`/starships/${id}`)} />
    );

    return (
      <div>
        <ErrorButton />
        <Row left={starshipList} />
      </div>
    );
  }
}

export default StarshipPage;
