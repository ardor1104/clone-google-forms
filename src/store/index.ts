import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import rootReducer from 'store/reducer';
import rootSaga from 'store/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers(rootReducer),
  middleware: [sagaMiddleware],
});

Object.values(rootSaga).forEach((saga) => {
  sagaMiddleware.run(saga);
});

export default store;
