import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import Todo from './Todo.js';
import '../styles/App.css';


const App = function(props){
	return (
		<main>
			<Header title={props.title} />

			<section className="todo-list">
				<Todo title={"Изучить JavaScript"} completed={true} />
				<Todo title={"Изучить React"} completed={true} />
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