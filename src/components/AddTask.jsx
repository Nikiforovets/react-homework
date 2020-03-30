import React from 'react';

function AddTask(){
    return(
        <div className="addTaskForm">
            <input className="addInput" type="text" placeholder="what needs to be done?"></input>
            <button className="addBtn">Add</button>
        </div>
    );
}

export default AddTask;