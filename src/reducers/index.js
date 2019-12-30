import { combineReducers } from 'redux';
import search from './search';
import savesearch from './savesearch';

export default combineReducers({
  search,
  savesearch
});
