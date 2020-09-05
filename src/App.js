import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['task 1', 'task 2', 'task 3'],
    };
  }

  onFormSubmit = (newTask) => {
    this.setState({ todos: [...this.state.todos, newTask] });
  };

  onDelete = (index) => {
    const array = [...this.state.todos];
    array.splice(index, 1);
    this.setState({ todos: array });
  };

  render() {
    return (
      <div className="wrapper">
        <TodoList todos={this.state.todos} onDelete={this.onDelete} />
        <TodoInput onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
