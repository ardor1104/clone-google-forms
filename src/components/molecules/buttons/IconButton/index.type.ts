import {
  DefaultOverridesType,
  DefaultOverridesComponentPropsType,
} from 'components/globalType';

import { ButtonPropsType } from 'components/atoms/Button/index.type';
import { IconsType } from 'components/atoms/Icon/index.type';

export interface IconButtonType
  extends Pick<
    ButtonPropsType,
    'to' | 'href' | 'isDisabled' | 'onClick' | 'disabledOnClick'
  > {
  iconName: IconsType;
  size?: number;
  padding?: number;
  overrides?: {
    Root?: DefaultOverridesType;
    StyledIcon?: DefaultOverridesType;
  };
}

export interface RootPropsType extends DefaultOverridesComponentPropsType {
  padding: IconButtonType['padding'];
}

export type StyledIconPropsType = DefaultOverridesComponentPropsType;
