import {
  REQUEST_CHARITIES,
  REQUEST_PAYMENT,
  SHOW_DONATION_AMOUNT_LIST,
  UPDATE_DONATION_AMOUNT_LIST,
  URL,
  PAY_NOW,
  UPDATE_MESSAGE,
  UPDATE_TOTAL_DONATE
} from './const';

//get list of all the charities
export function requestCharitiesList() {
  const request = fetch(`${URL}/charities`, {
      method: 'GET'
  }).then(response => response.json())
  return {
      type: REQUEST_CHARITIES,
      payload: request
  }
}

//get list of all payment amount
export function requestDonationAmount() {
  return {
      type: REQUEST_PAYMENT,
      payload: [{
              "id": 0,
              "price": 10
          },
          {
              "id": 1,
              "price": 20
          },
          {
              "id": 2,
              "price": 50
          },
          {
              "id": 3,
              "price": 100
          },
          {
              "id": 4,
              "price": 500
          },
      ]
  }
}

//get the total count of charities and update the payment options list visibility
export function showDonationList() {
  const paymentOptionsShow = []
  const request = fetch(`${URL}/charities`, {
      method: 'GET'
  }).then( response =>  response.json())
  request.then(function(result) {
    if(result.length >= 1){
      let arrayLength = result.length
      
      for( let i = 0 ; i < arrayLength ; i++ ) {
        paymentOptionsShow.push({active: false });
      }  
    }
 })
  
  return {
      type: SHOW_DONATION_AMOUNT_LIST,
      payload: paymentOptionsShow
  }
}

//to show and hide the payment options for each card
export function updateDonationList(list,id){
  return {
    type: UPDATE_DONATION_AMOUNT_LIST,
    payload: {
        "list": list,
        "id": id
        }
  }
}


//post the current paid amount
export function payNow(id, amount, currency) {
  const request = fetch(`${URL}/payments`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`
  })
  .then(response => response.json())
  return {
    type: PAY_NOW,
    payload: request
  }
}

//show thank you message
export function updateMessage(message) {
  return {
    type: UPDATE_MESSAGE,
    message: message
  }
}

//get the total number of payments made
export function summaryTotal() {
  const request = fetch(`${URL}/payments`,
    { method: 'GET' }).then(response => response.json())
  return {
    type: UPDATE_TOTAL_DONATE,
    payload: request
  }
}