// stuff here
import { ActionTypes } from '../actions';

const matchesReducer = (state = 10, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_MATCH:
      return state - 1;
    default:
      return state;
  }
};

export default matchesReducer;
