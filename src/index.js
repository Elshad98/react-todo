import React from "react";
import ReactDOM from "react-dom";

import App from './components/App.js';
import todos from './components/todos.js';

ReactDOM.render(<App todos={todos} />, document.querySelector('#root'));