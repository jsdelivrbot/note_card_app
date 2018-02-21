import { CREATE_COLUMN } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_COLUMN:
      return [ ...state, []];
    default:
      return state;
  }
}