import React,{Component} from 'react';
import './App.css'

class InfoHeader extends Component{
	constructor(){
		super();
		this.state={
			data:'',
		}
	}

	componentDidMount(){
		console.log("hwllo");
		fetch('dummyData.json').then((Response) => Response.json()).then((findresponse) =>
		{
			console.log(findresponse);
			this.setState({
				data: findresponse,
			})
		})

	}
	render(){
	return(
		
			<div className="header-strip"> 
				
				<div className="ribbon">
					<div className="absol-data">
  						<div>{this.state.data.label}</div>
  					</div>
				</div>
			
				<div className="pull-left style-box">
					<div>Christian Tucker</div>
					<div className="txt-26">{this.state.data.cardNumber}</div>
				</div>
				<div className="pull-left style-box">
					<div>MILEGE BALANCE</div>
					<div className="txt-36">{this.state.data.milegeBalance}</div>
					<div>Exp.<span>{this.state.data.date}</span></div>
				</div>
				<div className="pull-left style-box">
					<div>TRAVEL BANK</div>
					<div className="txt-36">{this.state.data.travelBank}</div>
				</div>
				<img className="img-card" src="./united_club_card.png"/>
			</div>
		)
	}
}

export default InfoHeader; 	