import React from 'react';
import TodoListItem from './TodoListItem'

function TodoList(){
    const list = ['Learn Js', 'Learn React', 'Learn Redux'];
    const element = list.map((item) => <TodoListItem key={item} todo={item}/>);
    return(
        <ul className="todoList">
           {element} 
        </ul>
    );
}

export default TodoList;