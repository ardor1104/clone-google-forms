export interface BodyHeaderSearchBoxType {
  value: string;
  onChange: (value: string) => void;
  onSearchEvent: () => void;
}

export interface RootPropsType {
  isFocused: boolean;
}
