export interface FormItemPopoverType {
  formsId: string;
  formsTitle: string;
  buttonSize?: number;
  buttonPadding?: number;
}

export type PopoverItemsType = Array<{
  label: string;
  iconName: 'Title' | 'Delete' | 'NewTab';
  onClick: () => void;
}>;
