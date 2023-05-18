import produce from 'immer';
import { ReduxActionsType } from 'redux/actions.type';
import {
  SWITCH_FORMS_VIEW_TYPE,
  SET_FORMS_FILTER,
  SET_FORMS_SORT,
  SET_FORMS_KEYWORD,
  SET_FORMS_LIST,
  ASCENDING_FORMS_LIST,
  SET_FORMS_LIST_ITEM,
  SET_FORMS_LIST_ITEM_INDEX,
  REMOVE_FORMS_LIST_ITEM,
} from 'redux/constants';
import { StateType } from './index.type';

const initialState: StateType = {
  viewType: 'goBoardView',
  filter: 'all',
  sort: 'lastOpened',
  keyword: '',
  list: undefined,
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
      case SET_FORMS_KEYWORD: {
        const { keyword } = action.payload;

        draft.keyword = keyword;
        break;
      }
      case SET_FORMS_LIST: {
        const { list } = action.payload;

        draft.list = list;
        break;
      }
      case ASCENDING_FORMS_LIST: {
        if (draft.list) {
          draft.list.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            } else if (a.title > b.title) {
              return 1;
            } else {
              return 0;
            }
          });
        }

        break;
      }
      case SET_FORMS_LIST_ITEM: {
        const { item } = action.payload;

        if (draft.list) {
          draft.list.splice(
            draft.list.findIndex((formsItem) => formsItem.id === item.id),
            1,
            item,
          );
        }
        break;
      }
      case SET_FORMS_LIST_ITEM_INDEX: {
        const { formsId, index } = action.payload;

        if (draft.list) {
          const temp = draft.list.splice(
            draft.list.findIndex((formsItem) => formsItem.id === formsId),
            1,
          );
          draft.list.splice(index, 0, ...temp);
        }
        break;
      }
      case REMOVE_FORMS_LIST_ITEM: {
        const { formsId } = action.payload;

        if (draft.list) {
          draft.list.splice(
            draft.list.findIndex((formsItem) => formsItem.id === formsId),
            1,
          );
        }
        break;
      }
      default:
        break;
    }
  });
};

export default formsReducer;
