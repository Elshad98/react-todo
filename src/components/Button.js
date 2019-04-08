import React from 'react';
import PropTypes from 'prop-types';

const Button = function(props){
	return (
		<button className={props.className} onClick={props.onClick}>
			<i className="material-icons">{props.icon}</i>
		</button>
	);
};

Button.propTypes = {
	className : PropTypes.string,
	icon : PropTypes.string,
	onClick: PropTypes.func.isRequired
};

export default Button;