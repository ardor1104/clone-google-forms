/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';

import useModal from 'hooks/useModal';

import { useDispatch } from 'react-redux';
import {
  deleteFormsAction,
  removeFormsListItemAction,
} from 'reducers/forms/actions';

import styled from 'styled-components';

import { Popover } from '@transverse/evo-ui';

import IconButton from 'components/molecules/buttons/IconButton';
import Icon from 'components/atoms/Icon';

import * as Type from './index.type';

const MenuItem = styled.div`
  padding: 8px 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  column-gap: 6px;
  flex: 1;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.gray200};
  }
`;

const MenuItemIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
`;

const ItemIcon = styled(Icon)`
  color: ${(props) => props.theme.palette.gray750};
`;

const MenuItemText = styled.p`
  flex: 1;
  color: #333333;
  font-size: ${(props) => props.theme.sizes.font.md};
  white-space: nowrap;
`;

export default function FormItemPopover({
  formsId,
  formsTitle,
  buttonSize,
  buttonPadding,
}: Type.FormItemPopoverType): JSX.Element {
  const dispatch = useDispatch();

  const { openModal } = useModal();

  const [popoverCloseState, setPopoverCloseState] = useState<boolean>(false);

  const doClosePopover = (): void => {
    setPopoverCloseState(true);
  };

  const doChangeFormTitle = (): void => {
    openModal({ name: 'editFormsTitle', props: { formsId, formsTitle } });
    doClosePopover();
  };

  const doDeleteForm = (): void => {
    dispatch(
      deleteFormsAction({
        id: formsId,
        succeedFunc: () => {
          dispatch(removeFormsListItemAction({ formsId }));
        },
      }),
    );
    doClosePopover();
  };

  const doOpenFormAsNewTab = (): void => {
    window.open(`${window.location.origin}/forms/${formsId}`, '', '_blank');
    doClosePopover();
  };

  const PopoverItems: Type.PopoverItemsType = [
    {
      label: '이름 바꾸기',
      iconName: 'Title',
      onClick: doChangeFormTitle,
    },
    {
      label: '삭제',
      iconName: 'Delete',
      onClick: doDeleteForm,
    },
    {
      label: '새 탭에서 열기',
      iconName: 'NewTab',
      onClick: doOpenFormAsNewTab,
    },
  ];

  useEffect(() => {
    if (popoverCloseState) {
      setPopoverCloseState(false);
    }
  }, [popoverCloseState]);

  return (
    <Popover
      overrides={{
        MenuList: {
          css: `
            padding: 6px 0;
            width: 220px;
          `,
        },
      }}
      Button={() => (
        <IconButton
          overrides={{
            Root: {
              css: `
                &:hover {
                  background-color: #dadce0;
                }
              `,
            },
          }}
          iconName='PopoverMenu'
          size={buttonSize ?? 30}
          padding={buttonPadding ?? 3}
        />
      )}
      items={PopoverItems.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={i} onClick={item.onClick}>
          <MenuItemIconWrapper>
            <ItemIcon name={item.iconName} width={24} />
          </MenuItemIconWrapper>
          <MenuItemText>{item.label}</MenuItemText>
        </MenuItem>
      ))}
      isExternal
      benchmark='bottom-center'
      direction='bottom-center'
      close={popoverCloseState}
      position={{
        x: 0,
        y: -4,
      }}
    />
  );
}
