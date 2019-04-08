import React from 'react';
import PropTypes from 'prop-types';

const Stats = function (props){
	const total = props.todos.length;
	const completed = props.todos.filter((todo) => {
		return todo.completed;
	}).length;
	const notCompleted = total - completed; 

	return (
		<table className="stats" >
			<tbody>
				<tr>
					<th>Всего задач:</th>
					<td>{total}</td>
				</tr>
				<tr>
					<th>Выполнено:</th>
					<td>{completed}</td>
				</tr>
				<tr>
					<th>Осталось:</th>
					<td>{notCompleted}</td>
				</tr>
			</tbody>
		</table>
	);
}

Stats.propTypes = {
	todos: PropTypes	.array.isRequired
};

export default Stats;