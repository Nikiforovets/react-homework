import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddPanel from "../add-panel";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./app.css";

class App extends React.Component {
  onInput = label => {
    this.props.search(label);
  };

  searchFilterTodo(array, searchFilter) {
    return array.filter(
      todo => todo.label.toLowerCase().indexOf(searchFilter) !== -1
    );
  }

  onClickFillter = id => {
    if (id === "activeBtn") this.props.filter(true);
    if (id === "doneBtn") this.props.filter(false);
    if (id === "allBtn") this.props.filter("");
  };

  btnFilterTodo(array, btnFilter) {
    return array.filter(todo => todo.done !== btnFilter);
  }

  render() {
    const { todoData, searchFilter, btnFilter } = this.props.data;
    const searchFilteredData = this.searchFilterTodo(todoData, searchFilter);
    const btnFilteredData = this.btnFilterTodo(searchFilteredData, btnFilter);

    const done = todoData.filter(todo => todo.done).length;
    const toDo = todoData.length - done;
    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onInput={this.onInput} />
          <ItemStatusFilter onClickFilter={this.onClickFillter} />
        </div>

        <TodoList todos={btnFilteredData} />
        <AddPanel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: label => dispatch(actions.search(label)),
    filter: label => dispatch(actions.filter(label))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
