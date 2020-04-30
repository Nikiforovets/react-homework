import React, { Component } from 'react';

import './todo-list-item.css';

class TodoListItem extends Component {
	toggleDone() {
		this.props.onToggle();
	}

	removeHandler() {
		this.props.onDelete();
	}

	importantHandler(){
		this.props.onImportant();
	}

	render() {
		const { important = false, label, done } = this.props;

		const style = {
			color: important ? 'steelblue' : 'black',
			fontWeight: important ? 'bold' : 'normal'
		};

		let className = `todo-list-item`;

		if (done) {
			className += ' done';
		}

		return (
			<span className={className}>
				<span
					className='todo-list-item-label'
					style={style}
					onClick={() => this.toggleDone()}
				>
					{label}
				</span>

				<button
					type='button'
					className='btn btn-outline-success btn-sm float-right'
					onClick={() => this.importantHandler()}>
					<i className='fa fa-exclamation' />
				</button>

				<button
					type='button'
					className='btn btn-outline-danger btn-sm float-right'
					onClick={() => this.removeHandler()}>
					<i className='fa fa-trash-o' />
				</button>
			</span>
		);
	}
}

export default TodoListItem;
