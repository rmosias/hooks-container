import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { StoreContext } from "redux-react-hook";
import todoReducer from "./reducers";
import App from './App';

const store = createStore(todoReducer);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
