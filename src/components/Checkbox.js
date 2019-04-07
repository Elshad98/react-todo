import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
	constructor (props){
		super(props);

		this.state = {
			checked : this.props.initialState
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick (evt){
		this.setState({
			checked: !this.state.checked
		}, () => { console.log(this.props.initialState) });
	}

	render (){
		return (
			<button className="checkbox icon" onClick={this.handleClick}>
				<i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
			</button>
		);
	}
}

Checkbox.propTypes = {
	initialState: PropTypes.bool.isRequired
};
	
export default Checkbox;