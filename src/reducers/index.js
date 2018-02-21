import { combineReducers } from 'redux';
import ColumnsReducer from './reducer_columns';

const rootReducer = combineReducers({
  columns: ColumnsReducer
});

export default rootReducer;
