import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import '../styles/App.css';


const App = function(props){
	return (
		<main>
			<Header title={props.title} />

			<section className="todo-list">
				<div className="todo completed">
					<button className="checkbox icon">
						<i className="material-icons">check_box</i>
					</button>
					<span className="todo-title">Изучить JavaScript</span>
					<button className="delete icon">
						<i className="material-icons">delete</i>
					</button>
				</div>

				<div className="todo">
					<button className="checkbox icon">
						<i className="material-icons">check_box_outline_blank</i>
					</button>
					<span className="todo-title">Изучить React</span>
					<button className="delete icon">
						<i className="material-icons">delete</i>
					</button>
				</div>
			</section>
		</main>
	);
}

App.propTypes = {
	title: PropTypes.string
}

App.defaultProps = {
	title: "React Todo"
}
export default App;