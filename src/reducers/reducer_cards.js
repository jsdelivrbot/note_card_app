import { CREATE_CARD } from '../actions';

let card_num = 1;

export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_CARD:
      return state;
    default:
      return state;
  }
}