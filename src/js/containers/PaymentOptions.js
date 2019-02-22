import React, { Component } from 'react';
import styled from 'styled-components';
import {
  FormGroup
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { payNow, updateMessage } from '../actions'

const PaymentLayout= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
  > .form-group{
    text-align:center;
    > label{
      margin:0 5px;
      > input {
        margin-left:5px;
        margin-right:5px;
      }
    }
  } 
`
const PaymentTitle = styled.p`
  font-size: 16px;
  text-align: center;
  color: #000;
`
const Button = styled.button`
  background: white;
  color: #215CEC;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #215CEC;
  border-radius: 3px;
`;


class PaymentOptions extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
    super();
  }

  getPrice(price) {
    this.setState({ value: price });
  }  
  
  payment(props) {
    let id = props.donationId;
    let amount = this.state.value;
    let currency = props.currency
    this.props.payNow(id, amount, currency);
    let message = `Thanks for donating $${amount}.`
    this.props.updateMessage(message);
  }
  
  renderDonationAmount({ payments }) {
    if (payments) {
      return payments.map((item) => {
        return (
          <label key={item.id}>
            <input
              type="radio"
              name="payment"
              onClick={() => this.getPrice(item.price)} />
            {item.price}
          </label>
        )
      })
    }
  }

  render(){
    return(
      <PaymentLayout>
        <PaymentTitle>
          Select the amount to donate in (THB)
        </PaymentTitle>
        <FormGroup>
          {this.renderDonationAmount(this.props)}
        </FormGroup>
        <Button disabled={this.state.value == '' ? true : false } onClick={() => this.payment(this.props)}> Pay </Button>
      </PaymentLayout>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ payNow, updateMessage}, dispatch)
}

export default connect(null, mapDispatchToProps)(PaymentOptions)