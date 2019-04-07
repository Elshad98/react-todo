import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox.js';
import Button from './Button.js';

const Todo = function(props){
	return (
		<div className={`todo${props.completed ? ' completed' : ''}`}>
			<Checkbox initialState={props.completed} />

			<span className="todo-title">{props.title}</span>

			<Button className={"delete icon"} icon={"delete"} />
		</div>	
	);	
};

Todo.propTypes = {
	title : PropTypes.string.isRequired,
	completed : PropTypes.bool.isRequired
};

export default Todo;