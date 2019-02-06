import {
  UPDATE_TOTAL_DONATE
} from '../actions/const'

export default function(state,action){
state= state === undefined ? null :state  
  switch(action.type){
    case UPDATE_TOTAL_DONATE:
      return action.payload
    default:
      return state
  }
}