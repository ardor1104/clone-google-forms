import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '베이스가 되는 버튼 컴포넌트',
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({
  onClick,
  disabledOnClick,
  ...props
}) => {
  const valueKnob: string = text('value', 'Default');

  return (
    <Button
      onClick={onClick || action('onClick')}
      disabledOnClick={disabledOnClick || action('disabledOnClick')}
      {...props}
    >
      {valueKnob}
    </Button>
  );
};
