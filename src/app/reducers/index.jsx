import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user'
import project from './project'

const rootReducer = combineReducers({
  user,
  project,
  routing
});

export default rootReducer;
