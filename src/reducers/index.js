import counterReducer from './counter';
import loggedReducer from './isLogged';
import userNum from './userNum';
import {combineReducers} from 'redux';

const allReducers  = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  userNum: userNum
})

export default allReducers;
