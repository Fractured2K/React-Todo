import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo handleToggleComplete={props.handleToggleComplete} key={todo.id} todo={todo} />
            )).reverse()}
        </div>
    )
}

export default TodoList;
