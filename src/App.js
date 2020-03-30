import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import InputSearch from './components/InputSearch'
import TaskFilters from './components/TaskFilters'
import TodoList from './components/TodoList'
import AddTask from './components/AddTask'

function App() {
  return (
    <div className="content">
      <Header />
      <div className="navPanel">
        <InputSearch />
        <TaskFilters />
      </div>
      <TodoList />
      <AddTask />
    </div>
  );
}

export default App;
