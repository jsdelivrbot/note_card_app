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
      var newState = Object.assign({}, state);
      delete newState[action.payload.key];
      return newState;
    case  types.EDIT_CARD:
      var newState = Object.assign({}, state);
      newState[action.payload.key].title = action.payload.title;
      newState[action.payload.key].note = action.payload.note;
      return newState;
    default:
      return state;
  }
}