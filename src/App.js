import React from 'react';
import useTodo from './logic-hooks/Todo';
import TodoInput from './components/Input';
import TodoList from './components/List';

export default function App() {
  const { todos, newTodo, setNewTodo, addTodo } = useTodo();

  return (
    <>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}