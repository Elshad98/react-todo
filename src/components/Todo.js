import React from 'react';
import PropTypes from 'prop-types';

const Todo = function(props){
	return (
		<div className="todo">
			<button className="checkbox icon">
				<i className="material-icons">check_box_outline_blank</i>
			</button>
			<span className="todo-title">{props.title}</span>
			<button className="delete icon">
				<i className="material-icons">delete</i>
			</button>
		</div>	
	);	
};

Todo.propTypes = {
	title : PropTypes.string.isRequired,
	completed : PropTypes.bool.isRequired
};

export default Todo;