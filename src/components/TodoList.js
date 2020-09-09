import React from 'react';

import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, onDelete }) => {
  const displayTodos = todos.map((todo, index) => {
    return <TodoItem item={todo} key={index} id={index} onDelete={onDelete} />;
  });

  return <div>{displayTodos}</div>;
};

export default TodoList;
