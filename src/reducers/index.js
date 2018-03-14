import { combineReducers } from 'redux';
import ColumnsReducer from '../redux/columns';
import CardsReducer from '../redux/cards';
import CardCounterReducer from './reducer_cardCounter';

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  cards: CardsReducer,
  cardCounter: CardCounterReducer
});

export default rootReducer;