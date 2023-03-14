import { InjectStoreType } from 'redux/index.type';
import { createSelector } from 'reselect';

const inputSelector = (state: InjectStoreType) => {
  return state.global;
};

export const globalLeftMenuSelector = createSelector(
  inputSelector,
  (globalState) => globalState.leftMenu,
);
