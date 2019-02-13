import React from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [];

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todoField: '',
      todos: todos
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // On form submission take input data and save it to state
  handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.todoField,
      id: data.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleSubmit={this.handleSubmit}
          onChange={this.handleChanges}
          todo={this.state.todoField}
        />
      </div>
    );
  }
}

export default App;
