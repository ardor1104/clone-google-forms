import produce from 'immer';
import { ReduxActionsType } from 'redux/actions.type';
import {
  SWITCH_FORMS_VIEW_TYPE,
  SET_FORMS_FILTER,
  SET_FORMS_SORT,
} from 'redux/constants';
import { StateType } from './index.type';

const initialState: StateType = {
  viewType: 'listView',
  filter: 'all',
  sort: 'lastOpened',
};

const formsReducer = (state = initialState, action: ReduxActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SWITCH_FORMS_VIEW_TYPE: {
        if (draft.viewType === 'listView') {
          draft.viewType = 'goBoardView';
        } else {
          draft.viewType = 'listView';
        }
        break;
      }
      case SET_FORMS_FILTER: {
        const { filter } = action.payload;

        draft.filter = filter;
        break;
      }
      case SET_FORMS_SORT: {
        const { sort } = action.payload;

        draft.sort = sort;
        break;
      }
      default:
        break;
    }
  });
};

export default formsReducer;
