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
      alert(`Input cannont be blank!`)
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

  handleToggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => todoId === todo.id ? { ...todo, completed: !todo.completed } : todo)
    })
  }

  handleHideCompleted = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
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
          handleHideCompleted={this.handleHideCompleted}
          onChange={this.handleChanges}
          todo={this.state.todoField}
        />
      </div>
    );
  }
}

export default App;
