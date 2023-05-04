export interface FormItemPopoverType {
  id: string;
  buttonSize?: number;
  buttonPadding?: number;
}

export type PopoverItemsType = Array<{
  label: string;
  iconName: 'Title' | 'Delete' | 'NewTab';
  onClick: () => void;
}>;
