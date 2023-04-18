import {
  GET_EXAMPLE_SAGA,
  SET_GLOBAL_LEFT_MENU_IS_VISIBLE,
  TOGGLE_GLOBAL_LEFT_MENU_IS_VISIBLE,
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
