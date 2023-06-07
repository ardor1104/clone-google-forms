import { useSelector } from 'react-redux';
import { modalsSelector } from 'reducers/modals/selectors';

import EditFromsTitle from '../EditFormsTitle';

const MODAL_LIST = {
  editFormsTitle: EditFromsTitle,
};

export default function Modals(): JSX.Element {
  const modals = useSelector(modalsSelector);

  return (
    <>
      {modals.map(({ name, props }) => {
        const ModalComponent = MODAL_LIST[name];
        return <ModalComponent key={name} {...props} />;
      })}
    </>
  );
}
