import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./item-details.css";
import { blueviolet } from "color-name";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    data: {},
    loading: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.updateComponent();
    }
  }

  updateComponent() {
    this.setState({ loading: true });
    this.props.getData(this.props.selectedItem).then(data =>
      this.setState({
        data: data,
        loading: false
      })
    );
  }

  renderCard() {
    const item = this.state.data;
    const { id, name, gender, eyeColor, birthYear } = item;
    if (this.state.data.id) {
      return (
        <>
          <ErrorButton />
          <div className="person-details card">
            <img className="person-image" src={this.props.getImage(id)} />

            <div className="card-body">
              <h4>{name}</h4>
              {
                <ul className="list-group list-group-flush">
                  {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, { item });
                  })}
                </ul>
              }
            </div>
          </div>
        </>
      );
    }
    return null;
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return this.renderCard();
  }
}
