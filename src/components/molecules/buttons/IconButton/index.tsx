import { useMemo } from 'react';

import overrideStyle from 'utils/overrideStyle';

import styled from 'styled-components';

import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

import * as Type from './index.type';

const Root = styled(Button)<Type.RootPropsType>`
  border-radius: ${(props) => `${props.theme.sizes.radius.max}px`};
  padding: ${(props) =>
    `${typeof props.padding === 'number' ? props.padding : '8'}px`};
  display: inline-flex;
  background-color: transparent;
  transition: background-color ease-in-out 200ms;

  &:hover {
    background-color: ${(props) =>
      props.theme.staticColors.molecules.iconButton.hoverBgColor};
  }

  ${(props) => props?.cssStyle ?? ''};
`;

const StyledIcon = styled(Icon)<Type.StyledIconPropsType>`
  color: ${(props) => props.theme.staticColors.molecules.iconButton.iconColor};

  ${(props) => props?.cssStyle ?? ''};
`;

export default function IconButton({
  iconName,
  size = 40,
  padding = 8,
  overrides,
  ...props
}: Type.IconButtonType): JSX.Element {
  const iconSize = useMemo(() => size - padding * 2, [size, padding]);

  return (
    <Root
      padding={padding}
      {...{ ...overrideStyle(overrides?.Root), ...props }}
    >
      <StyledIcon
        width={iconSize}
        name={iconName}
        {...overrideStyle(overrides?.StyledIcon)}
      />
    </Root>
  );
}
