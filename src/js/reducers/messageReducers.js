import {
  UPDATE_MESSAGE,
} from '../actions/const'

export default function(state,action){
state= state === undefined ? null :state  
  switch(action.type){
    case UPDATE_MESSAGE:
      return action.message 
    default:
      return state
  }
}