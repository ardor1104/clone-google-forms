import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { postFormsAction } from 'redux/forms/actions';

import styled from 'styled-components';

import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

const CircleButton = styled(Button)`
  border-radius: ${(props) => props.theme.sizes.radius.max};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.white};
  box-shadow: 0px 6px 10px 0px #00000023, 0px 1px 18px 0px #0000001e,
    0px 3px 5px -1px #00000033;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const PlusIcon = styled(Icon)`
  position: absolute;
  opacity: 1;
  transform: rotate(0);
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 200ms;
`;

const PencilIcon = styled(Icon)`
  position: absolute;
  color: #8430ce;
  opacity: 0;
  transform: rotate(225deg);
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 200ms;
`;

const TemplateButton = styled(CircleButton)`
  height: 40px;
  width: 40px;
  max-width: 0;
  max-height: 0;
  opacity: 0;
  transition: opacity ease-out 200ms;
  overflow: hidden;
`;

const Root = styled.div`
  z-index: 2;
  position: fixed;
  right: 24px;
  bottom: 24px;
  border-radius: ${(props) => props.theme.sizes.radius.max};
  display: inline-flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 56px;

  &:hover {
    height: 116px;
  }

  &:hover ${TemplateButton} {
    max-width: 40px;
    max-height: 40px;
    opacity: 1;
  }

  &:hover ${PlusIcon} {
    opacity: 0;
    transform: rotate(225deg);
  }

  &:hover ${PencilIcon} {
    opacity: 1;
    transform: rotate(360deg);
  }
`;

const MainButton = styled(CircleButton)`
  height: 56px;
  width: 56px;
`;

const DocsIcon = styled(Icon)`
  color: #8430ce;
`;

export default function CreateFormsButton(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doCreateNewForms = (): void => {
    let formsId;

    dispatch(
      postFormsAction({
        succeedFunc: (data) => {
          formsId = data.id;
        },
      }),
    );
    navigate(`/${formsId}`);
  };

  return (
    <Root>
      <MainButton onClick={doCreateNewForms}>
        <PlusIcon name='GoogPlus' width={24} />
        <PencilIcon name='Pencil' width={24} />
      </MainButton>
      <TemplateButton isDisabled>
        <DocsIcon name='Docs' width={24} />
      </TemplateButton>
    </Root>
  );
}
