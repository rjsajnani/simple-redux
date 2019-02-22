import {
  SHOW_DONATION_AMOUNT_LIST,
  UPDATE_DONATION_AMOUNT_LIST
} from '../actions/const'

export default function (state = null, action) {
  switch (action.type) {
    case SHOW_DONATION_AMOUNT_LIST:
      return action.payload
    case UPDATE_DONATION_AMOUNT_LIST:
      let updatedList = [...action.payload.list] // clone the array
      updatedList =  updatedList.map(
        (listValue, i) => i === action.payload.id ? {"active": true}
        : {"active": false})
      return updatedList
    default:
      return state;
  }
}
