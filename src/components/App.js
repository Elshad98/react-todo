import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.css';


const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', {className: 'subtitle'}, 'This is my first React app');
const div = React.createElement('div', null, title, subtitle);

const app = (
	<div>
		<h1>React Todo</h1>
		<p className="subtitle">This is my first React app</p>
	</div>
);

export {app};