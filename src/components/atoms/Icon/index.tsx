import styled from 'styled-components';

import * as icons from './icons';

import { IconPropsType } from './index.type';

const fontSize = ({
  width,
  height,
}: Pick<IconPropsType, 'width' | 'height'>) => {
  const size = width || height;
  return size ? `${size / 16}rem` : '1.25em';
};

const Root = styled.span<Pick<IconPropsType, 'width' | 'height'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props?.width ? '1em' : '')};
  height: ${(props) => (!props?.width && props?.height ? '1em' : '')};
  font-size: ${fontSize};

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    stroke: currentcolor;
  }
`;

export default function Icon({ name, ...props }: IconPropsType): JSX.Element {
  const SVGIcon = icons[name];

  return (
    <Root {...props}>
      <SVGIcon focusable={false} fill='none' />
    </Root>
  );
}
