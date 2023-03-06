import { InjectStoreType } from 'redux/index.type';
import { createSelector } from 'reselect';

const inputSelector = (state: InjectStoreType) => {
  return state.exampleType;
};

export const exampleDataSelector = createSelector(
  inputSelector,
  (exampleState) => exampleState.exampleData,
);
