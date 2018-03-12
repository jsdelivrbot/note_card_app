import { combineReducers } from 'redux';

import types from './types';

const initialState = {};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.CREATE_CARD:
      return { ...state, [action.payload.id]: action.payload };
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