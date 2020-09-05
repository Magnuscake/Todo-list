import React from 'react';

import './styles/ToDoItem.css';

const TodoItem = ({ item, onDelete, id }) => {
  return (
    <div
      onClick={() => {
        onDelete(id);
      }}
      className="item"
    >
      {item}
    </div>
  );
};

export default TodoItem;
