import {
  GET_EXAMPLE_SAGA,
  SET_GLOBAL_LEFT_MENU_IS_VISIBLE,
  TOGGLE_GLOBAL_LEFT_MENU_IS_VISIBLE,
  SET_GLOBAL_MAIN_PAGE_LIST_VIEW_TITLE,
} from 'redux/constants';

export const getExampleAction = (payload: {
  exampleId: string;
  onSucceed?: (data: any) => void;
  onFail?: () => void;
}) => ({
  type: GET_EXAMPLE_SAGA,
  payload,
});

export const setGlobalLeftMenuIsVisibleAction = (payload: {
  isVisible: any;
}) => ({
  type: SET_GLOBAL_LEFT_MENU_IS_VISIBLE,
  payload,
});

export const toggleGlobalLeftMenuIsVisibleAction = () => ({
  type: TOGGLE_GLOBAL_LEFT_MENU_IS_VISIBLE,
});

export const setGlobalMainPageListViewTitleAction = (payload: {
  listViewTitle: null | 'today' | 'week' | 'month' | 'before';
}) => ({
  type: SET_GLOBAL_MAIN_PAGE_LIST_VIEW_TITLE,
  payload,
});
