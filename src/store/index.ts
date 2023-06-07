/* eslint-disable @typescript-eslint/naming-convention */
import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import reducer from 'store/reducer';
import rootSaga from 'store/saga';

const rootReducer = combineReducers(reducer);

const sagaMiddleware = createSagaMiddleware();

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState,
  });

  Object.values(rootSaga).forEach((saga) => {
    sagaMiddleware.run(saga);
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
