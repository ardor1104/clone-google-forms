import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useRender from 'hooks/useRender';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('molecules/buttons/UpDownButton', () => {
  it('render Default', async () => {
    const component = useRender(<Default />);

    expect(component).toMatchSnapshot();
  });

  it('render text and buttons', async () => {
    useRender(<Default />);

    const text = await screen.getByText('0');
    expect(text).toBeInTheDocument();
    const decreaseButton = await screen.getByText('- Decrease');
    expect(decreaseButton).toBeInTheDocument();
    const increaseButton = await screen.getByText('+ Increase');
    expect(increaseButton).toBeInTheDocument();
  });

  it('decrease number', async () => {
    const onChange = jest.fn((value) => value);

    useRender(<Default propNumber={0} min={-10} onChange={onChange} />);

    const text = await screen.getByText('0');
    const decreaseButton = await screen.getByText('- Decrease');

    userEvent.click(decreaseButton);

    expect(text).toHaveTextContent('-1');
    expect(onChange).toHaveReturnedWith(-1);
    expect(onChange).toHaveReturnedTimes(2);
  });

  it('increase number', async () => {
    const onChange = jest.fn((value) => value);

    useRender(<Default propNumber={0} max={10} onChange={onChange} />);

    const text = await screen.getByText('0');
    const increaseButton = await screen.getByText('+ Increase');

    userEvent.click(increaseButton);

    expect(text).toHaveTextContent('1');
    expect(onChange).toHaveReturnedWith(1);
    expect(onChange).toHaveReturnedTimes(2);
  });
});
