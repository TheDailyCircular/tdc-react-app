import { combineReducers } from 'redux';
import ErrorReducer from './ErrorReducer';
import CircularReducer from './CircularReducer';

export default combineReducers({
  error: ErrorReducer,
  circular: CircularReducer
});
