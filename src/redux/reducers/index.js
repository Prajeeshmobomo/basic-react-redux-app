import { combineReducers } from 'redux';
//import { routerReducer as routing } from 'react-router-redux';

import bookReducer from './bookReducer';

const appReducer = combineReducers({
  // routing,
  books: bookReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;
