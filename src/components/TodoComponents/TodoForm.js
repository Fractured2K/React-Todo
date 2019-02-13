import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Enter a todo"
                    value={props.todo}
                    onChange={props.onChange}
                />
            </form>
        </div>
    )
}

export default TodoForm;
