import React, { Component } from 'react';

class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTask === '') return;
    this.props.onFormSubmit(this.state.newTask);
    this.setState({ newTask: '' });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Add todo"
                value={this.state.newTask}
                onChange={(e) => this.setState({ newTask: e.target.value })}
              />
            </div>
            <div className="control">
              <button type="submit" className="button is-info">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
