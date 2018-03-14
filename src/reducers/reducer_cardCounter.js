import cardTypes from '../redux/cards/types';

const initialState = 0;

export default function(state = initialState, action) {
  switch(action.type) {
    case cardTypes.CREATE_CARD:
      console.log('butteroo');
      return state + 1;
    default:
      return state;
  }
}