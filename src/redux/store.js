import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger)),
);
