import { InjectStoreType } from 'reducers/index.type';
import { createSelector } from 'reselect';

const inputSelector = (state: InjectStoreType) => {
  return state.me;
};

export const meIsLoggedInSelector = createSelector(
  inputSelector,
  (meState) => meState.isLoggedIn,
);

export const meInfoSelector = createSelector(
  inputSelector,
  (meState) => meState.info,
);
