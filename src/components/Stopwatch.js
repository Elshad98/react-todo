import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js';

class Stopwatch extends React.Component{
	constructor(props){
		super(props);

		this.state = {
		
		};
	}

	render(){
		return (
			<section className="stopwatch">
				<div className="stopwatch-time">00:23</div>

				<div className="stopwatch-controls">
					<Button className="icon" icon="play_arrow" />
					<Button className="icon" icon="stop" />
				</div>
			</section>
		);
	}
}

export default Stopwatch;