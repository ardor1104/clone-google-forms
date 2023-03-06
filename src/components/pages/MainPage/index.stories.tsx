import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainPage from '.';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

export const Default: ComponentStory<typeof MainPage> = () => {
  return <MainPage />;
};
