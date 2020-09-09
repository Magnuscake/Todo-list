import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Water plant', 'Clean gecko tank', 'Return book'],
    };
  }

  // Add new task
  onFormSubmit = (newTask) => {
    this.setState({ todos: [...this.state.todos, newTask] });
  };

  // Remove existing task
  onDelete = (index) => {
    const array = [...this.state.todos];
    array.splice(index, 1);
    this.setState({ todos: array });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-pad">
          <TodoList todos={this.state.todos} onDelete={this.onDelete} />
          <TodoInput onFormSubmit={this.onFormSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
