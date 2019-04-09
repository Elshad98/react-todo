import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js';

class Form extends React.Component {
	constructor (props){
		super(props);

		this.state = {
			
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit (evt){
		evt.preventDefault();
		const title = this.refs.title.value.trim();
		if(title && isNaN(title)){
			this.props.onAdd(title);
			this.refs.title.classList.remove('inputError');
			this.refs.title.value = '';
		}else{
			this.refs.title.classList.add('inputError');
		}
	}

	render (){
		return (
			<form className="todo-form" onSubmit={this.handleSubmit}>
				<input type="text" ref="title" placeholder="Что нужно сделать?" />

				<Button type="submit">Добавить</Button>
			</form>
		);
	}
}

Form.propTypes = {
	onAdd: PropTypes.func.isRequired
};

export default Form;