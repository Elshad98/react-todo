import React from "react";
import ReactDOM from "react-dom";

import App from './components/App.js';
import todos from './components/todos.js';

ReactDOM.render(<App initialData={todos} />, document.querySelector('#root'));