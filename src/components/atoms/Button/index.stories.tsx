import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '.';

const kindOptions = {
  mono: 'mono',
  underline: 'underline',
  text: 'text',
  dangerous: 'dangerous',
};

const sizeOptions = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
};

export default {
  title: 'atoms/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '베이스가 되는 버튼 컴포넌트',
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({
  kind,
  size,
  to,
  href,
  isDisabled,
  onClick,
  disabledOnClick,
}) => {
  const kindKnob: any = select('kind', kindOptions, 'mono');
  const sizeKnob: any = select('size', sizeOptions, 'md');
  const valueKnob: string = text('value', 'Default');
  const toKnob: string = text('to', '');
  const hrefKnob: string = text('href', '');
  const isDisabledKnob = boolean('isDisabled', false);

  const emptyTextConverter = (value: string): string | undefined => {
    if (value === '') {
      return undefined;
    }

    return value;
  };

  return (
    <Button
      kind={kind || kindKnob}
      size={size || sizeKnob}
      to={to || emptyTextConverter(toKnob)}
      href={href || emptyTextConverter(hrefKnob)}
      isDisabled={isDisabled || isDisabledKnob}
      onClick={onClick || action('onClick')}
      disabledOnClick={disabledOnClick || action('disabledOnClick')}
    >
      {valueKnob}
    </Button>
  );
};
