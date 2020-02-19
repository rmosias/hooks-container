import React from 'react';

export default function TodoList({ todos }) {
  return (
    <ol>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ol>
  );
}