import React from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";

class PeoplePage extends React.Component {
  state = {
    selectedItem: null
  };

  onSelectedItem = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            getData={this.props.getData}
            onSelectedItem={this.onSelectedItem}
            renderItem={this.props.renderItem}
          />
        </div>
        <div className="col-md-6">
          <ItemDetails selectedItem={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
