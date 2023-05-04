import { useDispatch } from 'react-redux';
import {
  clearModalsAction,
  openModalsModalAction,
  closeModalsModalAction,
} from 'redux/modals/actions';
import { ModalsType } from 'redux/modals/index.type';

const useModal = () => {
  const dispatch = useDispatch();

  const openModal = (payload: ModalsType) => {
    dispatch(openModalsModalAction(payload));
  };

  const closeModal = (name: ModalsType['name']) => {
    dispatch(closeModalsModalAction({ name }));
  };

  const clearModals = () => {
    dispatch(clearModalsAction());
  };

  return { openModal, closeModal, clearModals };
};

export default useModal;
