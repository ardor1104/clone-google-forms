import produce from 'immer';
import { ReduxActionsType } from 'redux/actions.type';
import {
  SET_GLOBAL_LEFT_MENU_IS_VISIBLE,
  TOGGLE_GLOBAL_LEFT_MENU_IS_VISIBLE,
} from 'redux/constants';
import { StateType } from './index.type';

const initialState: StateType = {
  leftMenu: {
    isVisible: false,
  },
};

const globalReducer = (state = initialState, action: ReduxActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_GLOBAL_LEFT_MENU_IS_VISIBLE: {
        const { isVisible } = action.payload;

        draft.leftMenu.isVisible = isVisible;
        break;
      }
      case TOGGLE_GLOBAL_LEFT_MENU_IS_VISIBLE: {
        draft.leftMenu.isVisible = !draft.leftMenu.isVisible;
        break;
      }
      default:
    }
  });
};

export default globalReducer;
