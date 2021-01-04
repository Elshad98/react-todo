import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './button';

class Todo extends React.Component {

	state = {
		editing: false,
		text: this.props.title,
		isInvalid: false
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		if (this.state.text.trim().length > 0) {
			this.props.onEdit(this.props.id, this.state.text);
			this.setState({
				editing: false,
				isInvalid: false
			});
		} else {
			this.setState({
				isInvalid: true
			});
		}
	}

	handleChange = (evt) => {
		this.setState({
			text: evt.target.value
		});
	}

	renderForm() {
		return (
			<form className='todo-edit-form' onSubmit={this.handleSubmit}>
				<input className={`${this.state.isInvalid ? 'is-invalid' : ''}`}
					type="text"
					onChange={this.handleChange}
					value={this.state.text} />
				<Button className='save icon' icon='save' type='submit' />
			</form>
		);
	}

	renderDisplay() {
		return (
			<div className={`todo${this.props.completed ? ' completed' : ''}`} >
				<Checkbox checked={this.props.completed} onChange={() => { this.props.onStatusChange(this.props.id) }} />

				<span className='todo-title'>{this.props.title}</span>

				<Button className='edit icon' icon='edit' onClick={() => { this.setState({ editing: true }) }} />
				<Button className='delete icon' icon='delete' onClick={() => { this.props.onDelete(this.props.id) }} />
			</div>
		);
	}

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay();
	}
}

Todo.propTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onStatusChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired
};

export default Todo;