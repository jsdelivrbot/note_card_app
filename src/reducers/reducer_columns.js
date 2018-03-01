import { CREATE_COLUMN } from '../actions';

const initialState = ['plant trees', 'grass', 'onion log'];

export default function (state = initialState, action) {
  console.log('TEST BUTTER');
  switch (action.type) {
    case CREATE_COLUMN:
    return [ ...state, []];
    default:
      return state;
  }
}