import { useDispatch } from 'react-redux';
import {
  clearModalsAction,
  openModalsModalAction,
  closeModalsModalAction,
} from 'reducers/modals/actions';
import { ModalsType } from 'reducers/modals/index.type';

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
