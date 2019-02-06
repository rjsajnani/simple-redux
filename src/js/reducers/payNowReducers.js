import {
  PAY_NOW,
} from '../actions/const'

export default function (state, action) {
  state = state === undefined ? null : state
  switch (action.type) {
    case PAY_NOW:
      return action.payload
    default:
      return state
  }
}