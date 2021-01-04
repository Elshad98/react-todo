import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

class Form extends React.Component {

	state = {
		title: ''
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		const title = this.state.title.trim();
		const input = evt.target.querySelector('input');
		if (title && isNaN(title)) {
			input.classList.remove('inputError');
			this.props.onAdd(title);
			this.setState({
				title: ''
			});
		} else {
			input.classList.add('inputError');
		}
	}

	handleChange = (evt) => {
		this.setState({
			title: evt.target.value
		});
	}

	render() {
		return (
			<form className="todo-form" onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.title}
					placeholder="Что нужно сделать?"
					onChange={this.handleChange}
				/>
				<Button type="submit">Добавить</Button>
			</form>
		);
	}
}

Form.propTypes = {
	onAdd: PropTypes.func.isRequired
};

export default Form;