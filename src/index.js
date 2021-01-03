import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import todos from './components/todos.js';

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));