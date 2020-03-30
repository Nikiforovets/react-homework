import React from 'react';

function TodoListItem(props){
    return(
        <li className="todoItem">
            <span className="itemText">{props.todo}</span>
            <div className="controlBtn">
                <button className="deleteBtn">Delete</button>
                <button className="importantBtn">!</button>
            </div>
        </li>
    )
}

export default TodoListItem;