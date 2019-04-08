import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.js';
import Todo from './Todo.js';
import todos from './todos.js';

import '../styles/App.css';

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			todos: this.props.initialData
		};

		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleStatusChange (id){
		const todos = this.state.todos.map((todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed
			}
			return todo;
		});

		this.setState({
			todos: todos
		});
	}

	handleDelete (id){
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});

		this.setState({
			todos: todos
		});
	}

	render (){
		return (
			<main>
				<Header title={this.props.title} todos={this.state.todos} />
				
				<section className="todo-list">
					{this.state.todos.map((todo) => {
						return <Todo 
									key={todo.id} 
									id={todo.id}
									title={todo.title} 
									completed={todo.completed} 
									onStatusChange={this.handleStatusChange}
									onDelete={this.handleDelete}
								/>
					})
					}
				</section>
			</main>
		);
	}
}

App.propTypes = {
	title: PropTypes.string,
	initialData: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})).isRequired
}

App.defaultProps = {
	title: "React Todo"
}
export default App;