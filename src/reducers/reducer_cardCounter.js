import cardTypes from '../redux/cards/types';

const initialState = 1;

export default function(state = initialState, action) {
  switch(action.type) {
    case cardTypes.CREATE_CARD:
      return state + 1;
    default:
      return state;
  }
}