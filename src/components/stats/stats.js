import PropTypes from 'prop-types';

import './stats.css';

const Stats = function (props) {
	const total = props.todos.length;
	const completed = props.todos.filter((todo) => {
		return todo.completed;
	}).length;
	const notCompleted = total - completed;

	return (
		<table className='stats' >
			<tbody>
				<tr>
					<th>All:</th>
					<td>{total}</td>
				</tr>
				<tr>
					<th>Done:</th>
					<td>{completed}</td>
				</tr>
				<tr>
					<th>Active:</th>
					<td>{notCompleted}</td>
				</tr>
			</tbody>
		</table>
	);
}

Stats.propTypes = {
	todos: PropTypes.array.isRequired
};

export default Stats;