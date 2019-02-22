import {
  REQUEST_PAYMENT
} from '../actions/const'

export default function (state = null, action) {
  switch (action.type) {
    case REQUEST_PAYMENT:
      return action.payload
    default:
      return state
  }
}