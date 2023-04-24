import { ComponentType, ElementType } from 'react';

export interface MainTopMenuPopoverType {
  Button: ComponentType | ElementType;
  items: Array<{
    id: string;
    label: string;
  }>;
  selectedId: string;
  onMenuClick: (id: string) => void;
}

export interface MenuItemTextPropsType {
  isSelected: boolean;
}
