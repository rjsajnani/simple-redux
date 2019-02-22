import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import SweetAlert from 'react-bootstrap-sweetalert';
import {
	requestCharitiesList,
	requestDonationAmount,
	showDonationList,
	updateMessage,
	updateDonationList,
	summaryTotal
} from '../actions';
import Card from './Card';
import Total from '../components/Total';
import { Container, Row } from 'react-bootstrap'

const Title = styled.h1`
  text-align: center;
  color: #647088;
	font-weight: 700;
`;

class Home extends Component{

	componentWillMount(){
		this.props.showDonationList()
		this.props.requestDonationAmount();
		this.props.requestCharitiesList();
		this.props.summaryTotal();
	}

	hideAlert() {
		this.props.updateDonationList(this.props.paymentList, '')
    let message = ""
		this.props.updateMessage(message)
		this.props.summaryTotal()
	}
	
	showCharities(listDetails){
		if (listDetails.charities){
			return listDetails.charities.map((list,index) => {
				return (
					<Card charitiesList={[list]} activeIndex={index} key={list.id} donationAmount={listDetails.payments} paymentList={listDetails.paymentList} /> 
				)
			})
		}
	}

	render(){
		return(
			<Container fluid={true}>
				 {this.props.message &&
          <div>
            <SweetAlert success title={this.props.message} onConfirm={this.hideAlert.bind(this)} />
          </div>
				}
				<Title>Payment System</Title>
				<Container>
					<Total total={this.props.total} />
					<Row className="show-grid">
						{this.showCharities(this.props)}
					</Row>
				</Container>
			</Container>
		)
	}
}

function mapStateToProps (state){
	return{
		charities: state.charities,
		payments: state.payments,
		paymentList: state.showList,
		pay: state.payNow,
		message: state.message,
		total: state.totalAmount,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ showDonationList , requestCharitiesList, requestDonationAmount, updateMessage ,updateDonationList, summaryTotal}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);