import React, { useEffect } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddPanel from "../add-panel";
import * as actions from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../services/swap-service";
import "./app.css";

const App = () => {
  const onInput = label => {
    dispatch(actions.search(label));
  };

  const searchFilterTodo = (array, searchFilter) => {
    return array.filter(
      todo => todo.label.toLowerCase().indexOf(searchFilter) !== -1
    );
  };

  const onClickFillter = id => {
    if (id === "activeBtn") dispatch(actions.filter(true));
    if (id === "doneBtn") dispatch(actions.filter(false));
    if (id === "allBtn") dispatch(actions.filter(""));
  };

  const btnFilterTodo = (array, btnFilter) => {
    return array.filter(todo => todo.done !== btnFilter);
  };

  const data = useSelector(state => state);
  const dispatch = useDispatch();

  const { todoData, searchFilter, btnFilter } = data;
  const searchFilteredData = searchFilterTodo(todoData, searchFilter);
  const btnFilteredData = btnFilterTodo(searchFilteredData, btnFilter);

  const done = todoData.filter(todo => todo.done).length;
  const toDo = todoData.length - done;

  useEffect(() => {
    getList().then(data => {
      dispatch(actions.setList(data));
    });
  }, []);

  return (
    <div className="todo-app">
      <AppHeader toDo={toDo} done={done} />
      <div className="top-panel d-flex">
        <SearchPanel onInput={onInput} />
        <ItemStatusFilter onClickFilter={onClickFillter} />
      </div>

      <TodoList todos={btnFilteredData} />
      <AddPanel />
    </div>
  );
};

export default App;
