import React,{ Component } from 'react'
class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
				email: props.detail.email,
				API: props.detail.API
		}
	}
	render(){
		return(
				<div>
					<form>
						Email= <input type = 'text' value = {this.state.email} onChange = {(event) => this.onChangeEmail(event)}/><br /><br/>
						API Key = <input type = 'text' value = {this.state.API} onChange = {(event) => this.onChangeAPI(event)}/><br/><br/>
						<input type="Submit" onClick = {() => this.handleClick()}/>
					</form>
				</div>
			)
	}
	handleClick = function(){
		console.log(this.state)
	}
	onChangeEmail = function(event){
		this.setState({
   				email: event.target.value
   		})
	}
	onChangeAPI = function(event){
		this.setState({
   				
   				API: event.target.value
   		})
	}}
export default Login;