import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Todo from '../Todo.js';
import Form from '../form';

import './app.css';

class App extends React.Component {

	state = {
		todos: this.props.initialData
	};

	handleStatusChange = (id) => {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		});

		this.setState({
			todos: todos
		});
	}

	handleDelete = (id) => {
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});

		this.setState({
			todos: todos
		});
	}

	nextId() {
		this._nextId = this._nextId || 4;
		return this._nextId++;
	}

	handleAdd = (title) => {
		const todo = {
			id: this.nextId(),
			title: title,
			completed: false
		}

		const todos = [...this.state.todos, todo];

		this.setState({
			todos: todos
		});
	}

	handleEdit = (id, title) => {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.title = title;
			}

			return todo;
		});

		this.setState({
			todos: todos
		});
	}

	render() {
		return (
			<main>
				<Header title={this.props.title} todos={this.state.todos} />
				<section className='todo-list'>
					{this.state.todos.map((todo) =>
						<Todo
							key={todo.id}
							id={todo.id}
							title={todo.title}
							completed={todo.completed}
							onStatusChange={this.handleStatusChange}
							onDelete={this.handleDelete}
							onEdit={this.handleEdit}
						/>
					)}
				</section>
				<Form onAdd={this.handleAdd} />
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
	title: 'React Todo'
}

export default App;