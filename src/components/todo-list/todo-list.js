import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

class TodoList extends React.Component{

	createTodoItem(item){
		const { id, ...itemProps } = item;
		return (
			<li key={id} className='list-group-item'>
				<TodoListItem {...itemProps} onToggle={() => this.props.onToggle(id)} onDelete={() => this.props.onDelete(id)} onImportant={() => this.props.onImportant(id)} />
			</li>
		);
	}
	
	render(){
		const elements = this.props.todos.map(item => this.createTodoItem(item));
		return <ul className='list-group todo-list'>{elements}</ul>;
	}
}

export default TodoList;
