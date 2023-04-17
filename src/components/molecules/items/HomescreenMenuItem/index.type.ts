import { IconsType } from 'components/atoms/Icon/index.type';

export type HomescreenMenuItemType = {
  iconName: IconsType;
  label: string;
  onClick?: () => void;
};
