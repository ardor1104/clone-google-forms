import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useRender from 'hooks/useRender';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('atoms/Button', () => {
  it('render Default', async () => {
    const component = useRender(<Default />);

    expect(component).toMatchSnapshot();
  });

  it('render Link', async () => {
    const component = useRender(<Default to='/' />);

    expect(component).toMatchSnapshot();
  });

  it('render Anchor & kind text', async () => {
    const component = useRender(<Default kind='text' />);

    expect(component).toMatchSnapshot();
  });

  it('render kind underline', async () => {
    const component = useRender(<Default kind='underline' />);

    expect(component).toMatchSnapshot();
  });

  it('render kind dangerous', async () => {
    const component = useRender(<Default kind='dangerous' />);

    expect(component).toMatchSnapshot();
  });

  it('do click', async () => {
    const onClick = jest.fn();

    useRender(<Default onClick={onClick} />);

    const buttonElement = await screen.getByRole('button');

    userEvent.click(buttonElement);

    expect(onClick).toHaveReturnedTimes(1);
  });

  it('do click when button disabled', async () => {
    const onClick = jest.fn();
    const disabledOnClick = jest.fn();

    useRender(
      <Default
        isDisabled
        onClick={onClick}
        disabledOnClick={disabledOnClick}
      />,
    );

    const buttonElement = await screen.getByRole('button');

    userEvent.click(buttonElement);

    expect(onClick).toHaveReturnedTimes(0);
    expect(disabledOnClick).toHaveReturnedTimes(1);
  });
});
