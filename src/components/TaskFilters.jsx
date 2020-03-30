import React from 'react';

function TaskFileters(){
    return (
        <div className="filters">
            <button className="filterBtn active">All</button>
            <button className="filterBtn">Active</button>
            <button className="filterBtn">Done</button>
        </div>
    );
}

export default TaskFileters;