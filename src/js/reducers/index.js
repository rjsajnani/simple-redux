import { combineReducers } from 'redux';
import charities from './charitiesReducers';
import payments from './paymentsReducers';
import showList from './showListReducers';
import payNow from './payNowReducers';
import message from './messageReducers';
import totalAmount from './totalReducers';

const rootReducer = combineReducers({
  charities,
  payments,
  showList,
  payNow,
  message,
  totalAmount
})

export default rootReducer;