import React from 'react';
//import './app-header.css';
import s from './app-header.module.css';

const AppHeader = ({ toDo, done }) => {
	return (
		<div className={s['app-header']}>
			<h1>Todo List</h1>
			<h2>
				{toDo} more to do, {done} done
			</h2>
		</div>
	);
};

export default AppHeader;
