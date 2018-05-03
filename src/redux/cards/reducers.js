import { combineReducers } from 'redux';

import types from './types';

const initialState = {
  0: {
    column: 0,
    cardId: 0,
    title: "Butter",
    note: "Butter"
  }
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.CREATE_CARD:
      return { ...state, [action.payload.cardId]: action.payload };
    case types.DELETE_CARD:
      console.log('Card Reducer: Deleting Card');
      var newState = Object.assign({}, state);
      console.log(newState);
      console.log(action.payload);
      delete newState[action.payload.key];
      console.log(newState);
      return newState;
    default:
      return state;
  }
}