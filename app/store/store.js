import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

let currentStore = null;
export const configureStore = (initialState = {}) => {
  currentStore = createStore(reducers, initialState);
  return currentStore;
};

export const getStore = () => currentStore;
