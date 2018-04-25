import React,{ Component } from 'react'
class Login extends Component{
	render(){
		return(
				<div>
					<form>
						Email= <input type = 'text' value = 'Enter your email' /><br /><br/>
						API Key = <input type = 'text' value = 'API Key' /><br/><br/>
						<input type="Submit" onClick = {() => this.handleFunction()}/>
					</form>
				</div>
			)
	}
	handleFunction = function(){
		alert('clicked')
	}
}
export default Login;