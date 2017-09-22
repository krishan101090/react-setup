import React,{Component} from 'react';
import './App.css'
import App from './App';
import Click from './Click';
import Link from './Link.react';
import Welcome from './Welcome'
class Home extends Component{
	render(){
	return(
			<div>
				<div>Hello world</div>
				<Welcome />
				<h1>hello</h1>
				<Click/>
				<App/>
				< Link page = "http://www.facebook.com" > Facebook < /Link>
			</div>
		)
	}
}

export default Home; 