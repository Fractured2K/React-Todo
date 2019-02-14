import React from 'react';

import './Todo.css';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className="todo-form">
                <h2>Enter a todo</h2>
                <input
                    type="text"
                    name="todoField"
                    placeholder="todo"
                    value={props.todo}
                    onChange={props.onChange}
                />

                <div className="todo-form-buttons">
                    <button>Add Todo</button>
                    <button onClick={props.handleHideCompleted}>Hide Completed</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;
