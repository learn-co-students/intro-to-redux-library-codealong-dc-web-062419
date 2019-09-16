// ./src/index.js
import React from "react";
import ReactDOM from "react-dom";
import shoppingListItemReducer from "./reducers/shoppingListItemReducer.js";
import App from "./App";
import "./index.css";
import { createStore } from "redux"; /* code change */
import { Provider } from "react-redux";

const store = createStore(shoppingListItemReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
