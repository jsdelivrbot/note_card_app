import { combineReducers } from 'redux';
import ColumnsReducer from './reducer_columns';
import CardsReducer from './reducer_cards';

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  cards: CardsReducer
});

export default rootReducer;