import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';

import useRender from 'hooks/useRender';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('organisms/headers/BodyHeader', () => {
  it('render Default', async () => {
    const component = useRender(<Default />);

    expect(component).toMatchSnapshot();
  });

  it('render BodyHeader buttons', async () => {
    useRender(<Default />);

    const mainPageButton = await screen.getByText('MainPage');
    expect(mainPageButton).toBeInTheDocument();
    const examplePageButton = await screen.getByText('ExamplePage');
    expect(examplePageButton).toBeInTheDocument();
  });
});
