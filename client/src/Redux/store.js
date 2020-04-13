import { createStore } from 'redux';
import combineReducers from '../Redux/reducers';

export default function configureStore(initialState ) {
  const store = createStore(
    combineReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}