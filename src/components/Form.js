import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js';

class Form extends React.Component {
	constructor (props){
		super(props);

		this.state = {
			title: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit (evt){
		evt.preventDefault();
		const title = this.state.title.trim();
		const input = evt.target.querySelector('input');
		if(title && isNaN(title)){
			input.classList.remove('inputError');
			this.props.onAdd(title);
			this.setState({
				title: ''
			});			
		}else{
			input.classList.add('inputError');
		}
	}

	handleChange (evt){
		const title = event.target.value;
		this.setState({
			title: title
		});
	}

	render (){
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