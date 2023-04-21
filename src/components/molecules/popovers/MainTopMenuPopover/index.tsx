import { ComponentType, ElementType } from 'react';

import styled from 'styled-components';

import { Popover } from '@transverse/evo-ui';

import Icon from 'components/atoms/Icon';

const MenuItem = styled.div`
  padding: 6px 42px 6px 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.gray200};
  }
`;

const MenuItemSelectedIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
`;

const MenuItemText = styled.p<{ isSelected: boolean }>`
  flex: 1;
  color: ${(props) => (props.isSelected ? '#333333' : '#202124')};
  font-size: ${(props) => props.theme.sizes.font.md};
  white-space: nowrap;
`;

export default function MainTopMenuPopover({
  Button,
  items,
  selectedId,
  onMenuClick,
}: {
  Button: ComponentType | ElementType;
  items: Array<{
    id: string;
    label: string;
  }>;
  selectedId: string;
  onMenuClick: (id: string) => void;
}): JSX.Element {
  return (
    <Popover
      overrides={{
        MenuList: {
          css: `
            padding: 6px 0;
          `,
        },
      }}
      Button={Button}
      items={items.map((item) => (
        <MenuItem key={item.id} onClick={() => onMenuClick(item.id)}>
          <MenuItemSelectedIconWrapper>
            {item.id === selectedId ? <Icon name='Check' width={20} /> : null}
          </MenuItemSelectedIconWrapper>
          <MenuItemText isSelected={item.id === selectedId}>
            {item.label}
          </MenuItemText>
        </MenuItem>
      ))}
      benchmark='bottom-center'
      direction='bottom-center'
      position={{
        x: 0,
        y: -4,
      }}
    />
  );
}
