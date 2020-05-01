import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";
import { connect } from "react-redux";
import * as actions from "../../actions";

class TodoList extends React.Component {
  createTodoItem(item) {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggle={() => this.props.toggleDone(id)}
          onDelete={() => this.props.toggleDelete(id)}
          onImportant={() => this.props.toggleImportant(id)}
        />
      </li>
    );
  }

  render() {
    const elements = this.props.todos.map(item => this.createTodoItem(item));
    return <ul className="list-group todo-list">{elements}</ul>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDone: id => dispatch(actions.toggleDone(id)),
    toggleDelete: id => dispatch(actions.toggleDelete(id)),
    toggleImportant: id => dispatch(actions.toggleImportant(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoList);
