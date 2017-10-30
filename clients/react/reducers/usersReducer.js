import { FETCH_USER } from '../types/types';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
      break;
    default:
      return state;
  }
}
