import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import './form.css';

class Form extends React.Component {

	state = {
		title: '',
		isInvalid: false
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		const title = this.state.title.trim();
		if (title.length > 0) {
			this.props.onAdd(title);
			this.setState({
				title: '',
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
			title: evt.target.value
		});
	}

	render() {
		return (
			<form className='todo-form' onSubmit={this.handleSubmit}>
				<input
					type='text'
					value={this.state.title}
					placeholder='What needs to be done'
					onChange={this.handleChange}
					className={`${this.state.isInvalid ? 'is-invalid' : ''}`} />
				<Button type='submit'>Add</Button>
			</form>
		);
	}
}

Form.propTypes = {
	onAdd: PropTypes.func.isRequired
};

export default Form;