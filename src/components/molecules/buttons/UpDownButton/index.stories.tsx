import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import UpDownButton from '.';

export default {
  title: 'molecules/buttons/UpDownButton',
  component: UpDownButton,
} as ComponentMeta<typeof UpDownButton>;

export const Default: ComponentStory<typeof UpDownButton> = ({
  onChange,
  ...props
}) => {
  return <UpDownButton onChange={onChange || action('onChnage')} {...props} />;
};
