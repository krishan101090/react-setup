import React,{Component} from 'react';
import './App.css'
import InfoHeader from './InfoHeader'
import Breadcrum from './Breadcrum'
import CardInfo from './Card'
class MyAccount extends Component{
	render(){
	return(
			<div>
				<Breadcrum />
				<div className="account-container">
					<div className="title">My Account</div>
					<InfoHeader />
					<CardInfo />

				</div>
			</div>
		)
	}
}

export default MyAccount; 


