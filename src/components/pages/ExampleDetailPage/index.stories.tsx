import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExampleDetailPage from '.';

export default {
  title: 'pages/ExampleDetailPage',
  component: ExampleDetailPage,
} as ComponentMeta<typeof ExampleDetailPage>;

export const Default: ComponentStory<typeof ExampleDetailPage> = () => {
  return <ExampleDetailPage />;
};
