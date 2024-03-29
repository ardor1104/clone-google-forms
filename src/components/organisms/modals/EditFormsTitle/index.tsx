import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import useModal from 'hooks/useModal';

import { useDispatch, useSelector } from 'react-redux';
import {
  patchFormsAction,
  ascendingFormsListAction,
  setFormsListItemAction,
  setFormsListItemIndexAction,
} from 'redux/forms/actions';
import { modalsPropsSelector } from 'redux/modals/selectors';
import { formsSortSelector } from 'redux/forms/selectors';

import { FormsViewOutputSerializer } from 'api/serializer.type';

import styled from 'styled-components';

import { Modal } from '@transverse/evo-ui';

import Button from 'components/atoms/Button';

const Title = styled.h3`
  margin-bottom: 16px;
  color: #202124;
  font-size: 1.375rem;
  font-weight: 400;
`;

const Description = styled.p`
  color: #5f6368;
  font-size: ${(props) => props.theme.sizes.font.lg};
  font-weight: 400;
`;

const InputWrapper = styled.div`
  margin: 24px 0;
  width: 100%;
`;

const FormsTitleInput = styled.input`
  border: 1px solid #9aa0a6;
  border-top: 1px solid #c0c0c0;
  border-radius: 4px;
  padding: 1px 8px;
  width: 100%;
  height: 25px;
  font-size: ${(props) => props.theme.sizes.font.md};
  outline: none;

  &:hover {
    border: 1px solid #5f6368;
  }

  &:focus {
    border: 1px solid #673ab7;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  column-gap: 16px;
`;

export default function EditFromsTitle(): JSX.Element {
  const dispatch = useDispatch();

  const modalProps = useSelector(modalsPropsSelector('editFormsTitle'));
  const formsSort = useSelector(formsSortSelector);

  const [formsTitle, setFormsTitle] = useState<string>('');

  const { closeModal } = useModal();

  const doCloseModal = (): void => {
    closeModal('editFormsTitle');
  };

  const doEditTitle = (): void => {
    const isTitleNotBlank = formsTitle !== '';
    const isTitleChanged = formsTitle !== modalProps?.formsTitle;

    if (isTitleNotBlank && isTitleChanged) {
      const id = modalProps?.formsId;
      const title = formsTitle;

      if (id) {
        dispatch(
          patchFormsAction({
            id,
            title,
            succeedFunc: (data) => {
              dispatch(setFormsListItemAction({ item: data }));
              doCloseModal();
              doFixIndexAsSortedCorrectly(data);
            },
          }),
        );
      }
    }
  };

  const doFixIndexAsSortedCorrectly = (
    formsItem: FormsViewOutputSerializer,
  ): void => {
    const isFromsSortedByEdit =
      formsSort === 'lastEdit' || formsSort === 'lastModifiedDate';
    const isFormsSortedByAscending = formsSort === 'ascending';

    if (isFromsSortedByEdit) {
      dispatch(
        setFormsListItemIndexAction({
          formsId: formsItem.id,
          index: 0,
        }),
      );
    } else if (isFormsSortedByAscending) {
      dispatch(ascendingFormsListAction());
    }
  };

  const onFormsTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    setFormsTitle(value);
  };

  const onFormsTitleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      doEditTitle();
    }
  };

  useEffect(() => {
    if (modalProps?.formsTitle) {
      setFormsTitle(modalProps?.formsTitle);
    }
  }, [modalProps?.formsTitle]);

  return (
    <Modal
      overrides={{
        Root: {
          css: `
            border-radius: 8px;
            padding: 30px 42px;
            width: 100%;
            max-width: 430px;
          `,
        },
      }}
      isOpen
      onClose={doCloseModal}
    >
      <Title>이름 바꾸기</Title>
      <Description>항목의 새 이름을 입력하세요.</Description>
      <InputWrapper>
        <FormsTitleInput
          value={formsTitle}
          onChange={onFormsTitleChange}
          onKeyPress={onFormsTitleKeyPress}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button kind='mono' onClick={doCloseModal}>
          취소
        </Button>
        <Button kind='primary' onClick={doEditTitle}>
          확인
        </Button>
      </ButtonWrapper>
    </Modal>
  );
}
