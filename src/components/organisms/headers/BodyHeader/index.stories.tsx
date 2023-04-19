import { ComponentStory, ComponentMeta } from '@storybook/react';

import BodyHeader from '.';

export default {
  title: 'organisms/headers/BodyHeader',
  component: BodyHeader,
} as ComponentMeta<typeof BodyHeader>;

export const Default: ComponentStory<typeof BodyHeader> = () => {
  return <BodyHeader />;
};
