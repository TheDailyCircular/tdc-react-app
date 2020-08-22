import { combineReducers } from 'redux';
import ErrorReducer from './ErrorReducer';
import CircularReducer from './CircularReducer';
import SecurityReducer from './SecurityReducer';

export default combineReducers({
  error: ErrorReducer,
  security: SecurityReducer,
  circular: CircularReducer
});
