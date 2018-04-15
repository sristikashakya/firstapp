import React, { Component } from 'react';
class User extends Component{
		constructor(props){
			super(props)
			this.state = {
				fullName: props.firstName + ' ' + props.lstName,
				username: 'Sagarmatha'
			}
		}
	render(){
		return(
				<div>
					<h1 onClick={()=> this.handleClick(this.state.fullName)}>this is {this.props.detail.name +' '+ this.props.age}!</h1>
					<p>hi! {this.state.username}</p>
					<input name='username' type='text' value={this.state.username} onChange={() =>this.handleClick()} />
				</div>
			)
	}
	handleClick = function() {
		alert(this.state.username + ' clicked')
	}
	handleChange = function(event){
		this.setState({
			username: event.target.value
		})
	}
}

export default User;