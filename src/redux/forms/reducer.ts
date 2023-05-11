import produce from 'immer';
import { ReduxActionsType } from 'redux/actions.type';
import {
  SWITCH_FORMS_VIEW_TYPE,
  SET_FORMS_FILTER,
  SET_FORMS_SORT,
  SET_FORMS_KEYWORD,
  SET_FORMS_LIST_VIEW_TITLE,
  SET_FORMS_LIST,
  SET_FORMS_LIST_ITEM,
  REMOVE_FORMS_LIST_ITEM,
} from 'redux/constants';
import { StateType } from './index.type';

// 원래 filter 나 sort, keyword애 따라서 GET 을 새로 해 list가 없데이트 되어야 하지만 백엔드가 없는 관계로 list는 고정
const initialState: StateType = {
  viewType: 'listView',
  filter: 'all',
  sort: 'lastOpened',
  keyword: '',
  listViewTitle: null,
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
      case SET_FORMS_LIST_VIEW_TITLE: {
        const { listViewTitle } = action.payload;

        draft.listViewTitle = listViewTitle;
        break;
      }
      case SET_FORMS_LIST: {
        const { list } = action.payload;

        draft.list = list;
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
