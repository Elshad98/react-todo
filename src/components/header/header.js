import React from 'react';
import PropTypes from 'prop-types';

import Stats from '../stats';
import Stopwatch from '../Stopwatch';

import './header.css';

const Header = function (props) {
	return (
		<header className='header'>
			<Stats todos={props.todos} />
			<h1 className='title'>{props.title}</h1>
			<Stopwatch />
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	todos: PropTypes.array.isRequired
};

export default Header;