import {
  CLEAR_MODALS,
  OPEN_MODALS_MODAL,
  CLOSE_MODALS_MODAL,
} from 'redux/constants';
import { ModalsType } from './index.type';

export const clearModalsAction = () => ({
  type: CLEAR_MODALS,
});

export const openModalsModalAction = (payload: ModalsType) => ({
  type: OPEN_MODALS_MODAL,
  payload,
});

export const closeModalsModalAction = (payload: {
  name: ModalsType['name'];
}) => ({
  type: CLOSE_MODALS_MODAL,
  payload,
});
