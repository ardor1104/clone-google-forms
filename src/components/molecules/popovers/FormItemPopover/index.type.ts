export interface FormItemPopoverType {
  id: string;
}

export type PopoverItemsType = Array<{
  label: string;
  iconName: 'Title' | 'Delete' | 'NewTab';
  onClick: () => void;
}>;
