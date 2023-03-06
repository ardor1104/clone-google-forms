import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExamplePage from '.';

export default {
  title: 'pages/ExamplePage',
  component: ExamplePage,
} as ComponentMeta<typeof ExamplePage>;

export const Default: ComponentStory<typeof ExamplePage> = () => {
  return <ExamplePage />;
};
