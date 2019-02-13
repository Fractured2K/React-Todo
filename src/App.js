import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todoField: '',
      todos: []
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.todoField === '') {
      console.log(`Make sure your todo isn't empty!`)
    }

    const newTodo = {
      task: this.state.todoField,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo],
      todoField: ''
    })
  }

  handleComplete = e => {

  }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList todos={this.state.todos} />
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
