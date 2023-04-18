import styled from 'styled-components';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, color } from '@storybook/addon-knobs';

import Icon from '.';

const StyledIcon = styled(Icon)<{ color: string }>`
  color: ${(props) => props.color};
`;

export default {
  title: 'atoms/Icon',
  component: Icon,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '아이콘 컴포넌트',
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = ({
  name = 'Add',
  ...props
}) => {
  const fill = color('color', '#2b2b2b');

  return <StyledIcon name={name} color={fill} {...props} />;
};
