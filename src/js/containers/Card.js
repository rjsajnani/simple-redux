import React, { Component} from 'react';
import {
	connect
} from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';
import ShowPayments from './PaymentOptions';
import { updateDonationList } from '../actions';
import { Close } from 'styled-icons/material';
import {
  Grid, Row, Col, Clearfix
} from 'react-bootstrap';

const CardWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: block;
  background: #fff;
  margin-bottom: 35px;
  box-shadow: -1px 5px 8px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  overflow: hidden;
`
const BgImage = styled.div`
  background: ${props => `url(/images/${props.background}) no-repeat center top`};
  height: 250px;
  overflow: hidden;
  padding: 0;
  border: none;
  background-size: cover;
  border-radius: 5px;
`
const TopicHightlight= styled.div`
  position: absolute;
  bottom: 0;
  background: #fff;
  width: 100%;
  padding: 20px;
  > p{
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #546791;
      width: 75%;
  };
`
const Button = styled.button`
  background: #fff;
  color: #215CEC;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #215CEC;
  border-radius: 3px;
`
const PaymentOptions = styled.div`
  position: absolute;
  background-color: rgba(255,255,255,0.9);
  width: 100%;
  overflow-y: auto;
  top: 100%;
  bottom: 0;
  height: 100%;
  z-index: 1;
  transition: all 0.5s;
  border-radius: 5px;
  ${({ active }) => active && `
  top: 0;
  height: 100%;
  `}
`

const CloseButton = styled.button`
  color: #000;
  cursor: pointer;
  background: transparent;
  padding: 10px;
  border: none; 
  position: absolute;
  right: 0;
`

class Card extends Component{

  constructor(){
    super();

  }
  //update the visibility of each payment option list
  toggleVisibility(list,id){
    this.props.updateDonationList(list,id)
  }


  renderCharitiesList(listDetails) {
    if(listDetails.charitiesList){
      return listDetails.charitiesList.map((item) => {
        return(
          <CardWrapper  key={item.id}>
            <BgImage background={item.image} />
              <TopicHightlight> 
                <p>{item.name}</p>
                <Button
                onClick={() => this.toggleVisibility(listDetails.paymentList,listDetails.activeIndex) }
                >
                  Donate
                </Button>
              </TopicHightlight>
            <PaymentOptions active={listDetails.paymentList[listDetails.activeIndex].active}>
              <CloseButton  onClick={() => this.toggleVisibility(listDetails.paymentList,'')}>
              <Close size="28" title="Close"  />

              </CloseButton>
              <ShowPayments payments={listDetails.donationAmount} donationId={item.id} currency={item.currency} />
            </PaymentOptions>
          </CardWrapper>
        )
      })
    }
  }  

  render(){
    return(
      <Col xs={12} md={6}>
        {this.renderCharitiesList(this.props)}
      </Col>      
    )
  }
}

function mapStateToProps (state){
	return{
		paymentList: state.showList,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ updateDonationList }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);