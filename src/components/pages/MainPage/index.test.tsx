import { composeStories } from '@storybook/testing-react';

import useRender from 'hooks/useRender';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('pages/MainPage', () => {
  it('render Default', async () => {
    const component = useRender(<Default />);

    expect(component).toMatchSnapshot();
  });
});
