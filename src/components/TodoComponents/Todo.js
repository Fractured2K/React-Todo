import React from 'react';

const Todo = props => {
    return (
        <div onClick={() => props.handleToggleComplete(props.todo.id)}
            className={props.todo.completed ? 'strike' : ''}>
            {props.todo.task}
        </div>
    )
}

export default Todo;
