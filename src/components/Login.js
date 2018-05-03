import React,{ Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import logo from '../assets/download.jpg'
class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
				email: '',
				API: ''
		}
	}
	render(){
		return(
				<div>
					<Card>
						<CardHeader avatar={logo} />
							<CardText>
								Email= <input type = 'text' placeholder='email' value = {this.state.email} onChange = {(event) => this.onChangeEmail(event)}/><br /><br/>
								API Key = <input type = 'text' placeholder='apikey' value = {this.state.API} onChange = {(event) => this.onChangeAPI(event)}/><br/><br/>
							</CardText>
							 <CardActions>
								<FlatButton label="Submit" onClick = {(event) => this.handleClick(event)} />
							</CardActions>
					</Card>
				</div>
			)
	}
	handleClick = function(event){
		event.preventDefault()
		fetch('https://api.rebrandly.com/v1/accounts',
		{
			headers: {
				apikey: this.state.API
			}
		})
		.then(response =>
		{
			if(response.ok){
				response.json()
				.then(data => {
					console.log(data)
					if(data.email === this.state.email){
						console.log("right user")
					}
					else{
						alert('unauthorized username')
					}
				})
			}
			else{
				alert(response.statusText)
			}	
		})
		
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
	}
}
export default Login;