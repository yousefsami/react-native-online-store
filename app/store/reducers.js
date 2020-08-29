import { combineReducers } from 'redux';
import userReducer from './stores/user';
import cartReducer from './stores/cart';

const rootReducer = combineReducers({
  userReducer,
  cartReducer
});

export default rootReducer;
