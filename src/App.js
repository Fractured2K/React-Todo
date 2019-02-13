import React from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
