import { InjectStoreType } from 'reducers/index.type';
import { createSelector } from 'reselect';
import { ModalsType } from './index.type';

const inputSelector = (state: InjectStoreType) => {
  return state.modals;
};

export const modalsSelector = createSelector(
  inputSelector,
  (modalsState) => modalsState,
);

export const modalsPropsSelector = (name: ModalsType['name']) =>
  createSelector(
    inputSelector,
    (modalsState) =>
      modalsState.find((modalsItem) => modalsItem.name === name)?.props,
  );
