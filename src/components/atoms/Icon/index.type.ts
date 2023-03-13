import * as icons from './icons';

export type IconsType = keyof typeof icons;

export type IconPropsType = {
  /** 아이콘의 이름을 선택합니다. 이름에 따라 svg 파일이 적용됩니다. */
  name: IconsType;
  /** 아이콘의 너비를 입력합니다. */
  width?: number;
  /** 아이콘의 높이를 입력합니다.(width가 존재 시 width가 우선) */
  height?: number;
};
