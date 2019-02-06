import {
  REQUEST_CHARITIES
} from '../actions/const'

export default function (state = null, action) {
  switch (action.type) {
    case REQUEST_CHARITIES:
      return action.payload
    default:
      return state;
  }
}