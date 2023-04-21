import { InjectStoreType } from 'redux/index.type';
import { createSelector } from 'reselect';

const inputSelector = (state: InjectStoreType) => {
  return state.forms;
};

export const formsViewTypeSelector = createSelector(
  inputSelector,
  (formsState) => formsState.viewType,
);

export const formsFilterSelector = createSelector(
  inputSelector,
  (formsState) => formsState.filter,
);

export const formsSortSelector = createSelector(
  inputSelector,
  (formsState) => formsState.sort,
);