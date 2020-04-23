import React, { Component } from "react";
import PropTypes from "prop-types";
import "./item-details.css";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {
  state = {
    data: {},
    loading: false
  };

  // static defaultProps = {
  //   itemId: 2
  // };

  componentDidMount() {
    this.updateComponent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateComponent();
    }
  }

  updateComponent() {
    this.setState({ loading: true });
    this.props.getData(this.props.itemId).then(data =>
      this.setState({
        data: data,
        loading: false
      })
    );
  }

  renderCard() {
    const item = this.state.data;
    const { id, name, gender, eyeColor, birthYear } = item;
    if (item.id) {
      return (
        <div>
          <ErrorButton />
          <div className="person-details card">
            <img className="person-image" src={this.props.getImageUrl(id)} />

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
        </div>
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

ItemDetails.defaultProps = {
  itemId: 2
};

// ItemDetails.propTypes = {
//   itemId: (props, propName, componentName) => {
//     if (typeof props[propName] === "number") {
//       return null;
//     }
//     return new TypeError(`${componentName} - ${propName} must be number`);
//   }
// };

ItemDetails.propTypes = {
  itemId: PropTypes.number
};