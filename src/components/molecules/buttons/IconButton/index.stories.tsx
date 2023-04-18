import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconButton from '.';

export default {
  title: 'molecules/buttons/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = ({
  iconName,
  onClick,
  disabledOnClick,
  ...props
}) => {
  return (
    <IconButton
      iconName={iconName ?? 'Add'}
      onClick={onClick || action('onClick')}
      disabledOnClick={disabledOnClick || action('disabledOnClick')}
      {...props}
    />
  );
};
