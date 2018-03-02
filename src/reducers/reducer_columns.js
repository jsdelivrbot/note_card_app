import { CREATE_COLUMN } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_COLUMN:
      if (state.length < 4) {
        return [ ...state, []];
      }
    return state;
    default:
      return state;
  }
}