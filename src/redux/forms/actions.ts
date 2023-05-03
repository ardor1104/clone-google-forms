import {
  SWITCH_FORMS_VIEW_TYPE,
  SET_FORMS_FILTER,
  SET_FORMS_SORT,
  SET_FORMS_LIST_VIEW_TITLE,
} from 'redux/constants';

export const switchFormsViewTypeAction = () => ({
  type: SWITCH_FORMS_VIEW_TYPE,
});

export const setFormsFilterAction = (payload: {
  filter: 'all' | 'own' | 'notOwned';
}) => ({
  type: SET_FORMS_FILTER,
  payload,
});

export const setFormsSortAction = (payload: {
  sort: 'lastOpened' | 'lastEdit' | 'lastModifiedDate' | 'ascending';
}) => ({
  type: SET_FORMS_SORT,
  payload,
});

export const setFormsListViewTitleAction = (payload: {
  listViewTitle: null | 'today' | 'week' | 'before';
}) => ({
  type: SET_FORMS_LIST_VIEW_TITLE,
  payload,
});
