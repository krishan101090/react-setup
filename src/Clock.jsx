import React,{Component} from 'react';
import './App.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state ={
			days:0,
			hours:0,
			minutes:0,
			seconds:0
		}
		console.log('props',this.props);
	}
	//Called before render method on both client and server side
	componentWillMount(){
		this.getTimeUntil(this.props.deadline);
	}
//Updating the State
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline),1000);
	}

	leading0(num){
		if (num < 10) {
			return '0' + num;
		}
		return num;
	}

	getTimeUntil(deadline){
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor(time/(1000*60*60) % 24);
		const days = Math.floor(time/(1000*60*60*24));
		this.setState({days,hours,minutes,seconds});
	}


	render(){
		
		return(
			<div>
				<div className="App-title">{this.leading0(this.state.days)} days</div>
				<div className="App-title">{this.leading0(this.state.hours)} hours</div>
				<div className="App-title">{this.leading0(this.state.minutes)} minutes</div>
				<div className="App-title">{this.leading0(this.state.seconds)} seconds</div>
			</div>
		)
	}
}
export default Clock;