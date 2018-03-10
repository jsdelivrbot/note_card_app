import { CREATE_CARD, DELETE_CARD } from '../actions';

export default function(state = {}, action) {
  console.log('action:');
  console.log(action);
  switch(action.type) {
    case CREATE_CARD:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CARD:
      console.log('Card Reducer: Deleting Card');
      var newState = state;
      console.log(action.payload);
      delete newState[action.payload.key];
      return newState;
    default:
      return state;
  }
}