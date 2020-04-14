import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import dataReducer from './data-reducer';
// import userReducer from './user-reducer';

export default combineReducers({
  userInfo: userReducer,
  data: dataReducer,
  // user: userReducer
});

// export { default } from "../reducers";
