import React from "react";
import ErrorButton from "../error-button";
import { PersonList, PersonDetails } from "../sw-conponents";
import { withComponentError } from "../../hocs";
import Row from "../row";
import { withRouter, Redirect } from "react-router-dom";

class PeoplePage extends React.Component {
  state = {
    selectedPerson: null,
    isLoggedIn: true
  };

  onSelectedPerson = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const { history } = this.props;
    const peopleList = (
      <PersonList onSelectedItem={id => history.push(`/people/${id}`)} />
    );

    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <ErrorButton />
        <Row left={peopleList} />
      </div>
    );
  }
}

export default withRouter(PeoplePage);
