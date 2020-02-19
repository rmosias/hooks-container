import { useState, useContext } from 'react';
import { useDispatch, StoreContext } from 'redux-react-hook';

export default function useTodo() {
  const [newTodo, setNewTodo] = useState('');

  const store = useContext(StoreContext);
  const todos = store.getState();

  const dispatch = useDispatch();

  function addTodo() {
    dispatch({ type: 'ADD_TODO', text: newTodo });
    setNewTodo('');
  }

  return { todos, newTodo, setNewTodo, addTodo };
}