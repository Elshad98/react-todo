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
		console.log(evt);
	}

	render (){
		return (
			<form className="todo-form" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Что нужно сделать?" />

				<Button type="submit">Добавить</Button>
			</form>
		);
	}
}

Form.propTypes = {

};

export default Form;