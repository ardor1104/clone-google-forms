import {
  FormsViewOutputSerializer,
  SingleFormsViewOutputSerializer,
} from 'api/serializer.type';

import {
  GET_FORMS_SAGA,
  POST_FORMS_SAGA,
  PATCH_FORMS_SAGA,
  DELETE_FORMS_SAGA,
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

export const getFormsAction = (payload: {
  filter: 'all' | 'own' | 'notOwned';
  sort: 'lastOpened' | 'lastEdit' | 'lastModifiedDate' | 'ascending';
  keyword: string;
  succeedFunc?: (data: Array<FormsViewOutputSerializer>) => void;
  failedFunc?: () => void;
}) => ({
  type: GET_FORMS_SAGA,
  payload,
});

export const postFormsAction = (payload: {
  template?: 'contact' | 'event' | 'party' | 'tShirt';
  succeedFunc?: (data: SingleFormsViewOutputSerializer) => void;
  failedFunc?: () => void;
}) => ({
  type: POST_FORMS_SAGA,
  payload,
});

export const patchFormsAction = (payload: {
  id: string;
  title?: string;
  succeedFunc?: (data: FormsViewOutputSerializer) => void;
  failedFunc?: () => void;
}) => ({
  type: PATCH_FORMS_SAGA,
  payload,
});

export const deleteFormsAction = (payload: {
  id: string;
  succeedFunc?: () => void;
  failedFunc?: () => void;
}) => ({
  type: DELETE_FORMS_SAGA,
  payload,
});

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

export const setFormsKeywordAction = (payload: { keyword: string }) => ({
  type: SET_FORMS_KEYWORD,
  payload,
});

export const setFormsListAction = (payload: {
  list: Array<FormsViewOutputSerializer>;
}) => ({
  type: SET_FORMS_LIST,
  payload,
});

export const ascendingFormsListAction = () => ({
  type: ASCENDING_FORMS_LIST,
});

export const setFormsListItemAction = (payload: {
  item: FormsViewOutputSerializer;
}) => ({
  type: SET_FORMS_LIST_ITEM,
  payload,
});

export const setFormsListItemIndexAction = (payload: {
  formsId: string;
  index: number;
}) => ({
  type: SET_FORMS_LIST_ITEM_INDEX,
  payload,
});

export const removeFormsListItemAction = (payload: { formsId: string }) => ({
  type: REMOVE_FORMS_LIST_ITEM,
  payload,
});
