import { CREATE_COLUMN, CREATE_CARD, DELETE_CARD } from '../actions';

const initial_columns = []

export default function (state = initial_columns, action) {
  switch (action.type) {
    case CREATE_COLUMN:
      if (state.length < 4) {
        return [ ...state, []];
      }
    return state;
    case CREATE_CARD:
      console.log('column reducer');
      console.log(state);
      let newState = Array.from(state);
      newState[action.payload.column].push(action.payload.id);
      return newState;
    case DELETE_CARD:
      console.log("column: " + action.payload.column);
      console.log("key: " + action.payload.key);
      console.log(state[action.payload.column])
      newState = Array.from(state);
      let col = newState[action.payload.column];
      console.log("col:", col);
      let index = col.indexOf(action.payload.key);
      console.log('index:', index);
      col.splice(index, 1);
      newState[action.payload.column] = col;
      console.log('NEWSTATE');
      console.log(newState);
      return newState;
    default:
      return state;
  }
}