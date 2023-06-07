import produce from 'immer';
import { ReduxActionsType } from 'reducers/actions.type';
import {
  CLEAR_MODALS,
  OPEN_MODALS_MODAL,
  CLOSE_MODALS_MODAL,
} from 'reducers/constants';
import { StateType } from './index.type';

const initialState: StateType = [];

const modalsReducer = (state = initialState, action: ReduxActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CLEAR_MODALS: {
        draft.splice(0, draft.length);
        break;
      }
      case OPEN_MODALS_MODAL: {
        const { name, props } = action.payload;
        const isModalAlreadyOpened = draft.some(
          (modalItem) => modalItem.name === name,
        );

        if (!isModalAlreadyOpened) {
          draft.push({ name, props });
        }
        break;
      }
      case CLOSE_MODALS_MODAL: {
        const { name } = action.payload;

        draft.splice(
          draft.findIndex((modalItem) => modalItem.name === name),
          1,
        );
        break;
      }
      default:
        break;
    }
  });
};

export default modalsReducer;
