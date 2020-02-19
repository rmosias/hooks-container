
import React from 'react';

export default function TodoInput({ newTodo, setNewTodo, addTodo }) {
  return (
    <input
      type="text"
      onChange={e => setNewTodo(e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          addTodo();
        }
      }}
      placeholder="New Todo"
      value={newTodo}
    />
  );
}