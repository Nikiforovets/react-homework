import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddPanel from '../add-panel';

import './app.css';

class App extends React.Component {	
	maxId = 100;

	state = {
		todoData: [
			{ label: 'Drink Coffee', important: false, id: 1, done: false },
			{ label: 'Make Awesome App', important: true, id: 2, done: false },
			{ label: 'Have a lunch', important: false, id: 3, done: false }
		],
		searchFilter: '',
		btnFilter: ''
	}

	onInput = (label) => {
		this.setState(() => {
			return{
				searchFilter: label
			}
		});
	}

	searchFilterTodo(array){
		return array.filter(todo => 
			todo.label.toLowerCase().indexOf(this.state.searchFilter) !== -1);
	}

	onClickFillter = (id) => {
		this.setState(() => {
				if(id === 'activeBtn')
					return {btnFilter: true};
				if(id === 'doneBtn')
					return {btnFilter: false};
				if(id === 'allBtn'){
					return {btnFilter: ''};
				}
			}
		);
	}

	btnFilterTodo(array){
		return array.filter(todo => 
			todo.done !== this.state.btnFilter);
	}


	onDelete = (id) => {
		this.setState((prevState) => {
			const todos = prevState.todoData.filter(todo => todo.id !== id);
			return{
				todoData: todos
			};
		});
	};

	onImportant = (id) => {
		console.log(id);
		this.setState((prevState) => {
			const todo = prevState.todoData.find(todo => todo.id === id);
			todo.important = !todo.important;
			return{
				prevState
			};
		});
	}

	onAdd = (label) => {
		this.setState((prev) => {
			return{
				todoData: [...prev.todoData, {label, important: false, id: ++this.maxId, done: false}]
			}
		});
	}

	onToggle = (id) => {
		this.setState((prevState) => {
			const todos = prevState.todoData.map(todo => {
				if(todo.id === id){
					todo.done = !todo.done;
				}
				return todo;
			});
			return {
				todoData: todos
			};
		});
	}

	render(){
		const searchFilter = this.searchFilterTodo(this.state.todoData);
		const btnFilter = this.btnFilterTodo(searchFilter);
		const {todoData} = {todoData: btnFilter};
		const done = todoData.filter((todo) => todo.done).length;
		const toDo = todoData.length - done;
		return (
			<div className='todo-app'>
				<AppHeader toDo={toDo} done={done} />
				<div className='top-panel d-flex'>
					<SearchPanel onInput={this.onInput}/>
					<ItemStatusFilter onClickFilter={this.onClickFillter}/>
				</div>
	
				<TodoList todos={todoData} onImportant={this.onImportant} onDelete={this.onDelete} onToggle={this.onToggle} />
				<AddPanel onAdd={this.onAdd}/>
			</div>
		);
	}
	
};

export default App;
