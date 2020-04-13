import { combineReducers } from 'redux';

import cartReducer from './cart-reducer';
import dataReducer from './data-reducer';
// import userReducer from './user-reducer';

export default combineReducers({
  cart: cartReducer,
  data: dataReducer,
  // user: userReducer
});

// export { default } from "../reducers";
