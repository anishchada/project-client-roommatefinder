import { combineReducers } from 'redux';

import MatchesReducer from './matches_reducer';


const rootReducer = combineReducers({
  matches: MatchesReducer,
});

export default rootReducer;
