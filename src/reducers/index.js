import { combineReducers } from 'redux';
import search from './search';
import history from './history';

export default combineReducers({
  search,
  history
});
