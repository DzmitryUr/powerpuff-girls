import { combineReducers } from 'redux';
import show from './show';
import episodes from './episodes';

export default combineReducers({
  show,
  episodes,
});
