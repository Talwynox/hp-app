import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootEpic } from './features';
import { compose } from '@reduxjs/toolkit';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // TODO
const enhancer = composeEnhancers(applyMiddleware(epicMiddleware))

export function store() {
  const store = createStore(
    rootReducer,
    enhancer
  );

  epicMiddleware.run(rootEpic)
  return store;
}