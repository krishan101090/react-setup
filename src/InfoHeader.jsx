import React,{Component} from 'react';
import './App.css'
class InfoHeader extends Component{
	render(){
	return(
			<div className="header-strip"> 
			
				<div className="ribbon">
					<div className="absol-data">
  						<div>GENERAL</div>
  						<div>MEMBER</div>
  					</div>
				</div>
			
				<div className="pull-left style-box">
					<div>Christian Tucker</div>
					<div className="txt-26">XW2712713</div>
				</div>
				<div className="pull-left style-box">
					<div>MILEGE BALANCE</div>
					<div className="txt-36">10,320</div>
					<div>Exp.06/30/2019</div>
				</div>
				<div className="pull-left style-box">
					<div>TRAVEL BANK</div>
					<div className="txt-36">$201</div>
				</div>
				<img className="img-card" src="./united_club_card.png"/>
			</div>
		)
	}
}

export default InfoHeader; 	