import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todos = [];

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todoField: '',
      todos
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
      todoField: '',
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggleComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }

      return todo
    });

    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>

        <TodoList
          handleToggleComplete={this.handleToggleComplete}
          todos={this.state.todos}
        />

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
