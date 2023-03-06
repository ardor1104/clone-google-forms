import { ReactNode } from 'react';

export interface ButtonPropsType {
  children: ReactNode;
  /** 버튼의 종류를 선택합니다. 종류에 따라 스타일이 적용됩니다. */
  kind?: 'mono' | 'underline' | 'text' | 'dangerous';
  /** 버튼의 사이즈를 선택합니다. */
  size?: 'lg' | 'md' | 'sm';
  /** 이 값이 존재한다면 Link Component로 생성됩니다. */
  to?: string;
  /** 이 값이 존재한다면 a tag로 생성됩니다.(to값도 존재 시 to가 우선) */
  href?: string;
  /** 이 값을 'true'로 설정하면 버튼이 비활성화됩니다. */
  isDisabled?: boolean;
  /** isDisabled가 false일때 버튼을 클릭하면 이벤트가 작동합니다. */
  onClick?: () => void;
  /** isDisabled가 true일때 버튼을 클릭하면 이벤트가 작동합니다.() */
  disabledOnClick?: () => void;
}
