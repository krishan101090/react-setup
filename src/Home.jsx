import React,{Component} from 'react';
import './App.css'
import MyAccount from './MyAccount';



class Home extends Component{
	render(){
	return(
			<div className="main-container">
				

				<MyAccount />
				{/* 
				<Welcome />
				<h1>hello</h1>
				<Click/>
				<App/>
				< Link page = "http://www.facebook.com" > Facebook < /Link>
				*/}
			</div>
		)
	}
}

export default Home; 