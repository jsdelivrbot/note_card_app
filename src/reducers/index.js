import { combineReducers } from 'redux';
import ColumnsReducer from '../redux/columns';
import CardsReducer from '../redux/cards';

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  cards: CardsReducer
});

export default rootReducer;