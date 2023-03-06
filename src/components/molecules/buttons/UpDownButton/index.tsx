import { useState, useEffect, useMemo } from 'react';

import styled from 'styled-components';

import Button from 'components/atoms/Button';

import { UpDownButtonPropsType } from './index.type';

const Root = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.p`
  width: 100px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default function UpDownButton({
  propNumber,
  max,
  min,
  onChange,
}: UpDownButtonPropsType): JSX.Element {
  const [number, setNumber] = useState<number>(0);

  const isNumberMoreThanMax: boolean = typeof max === 'number' && number >= max;
  const isNumberLessThanMin: boolean = typeof min === 'number' && number <= min;

  const increaseNumber = (): void => {
    setNumber((state) => state + 1);
  };

  const decreaseNumber = (): void => {
    setNumber((state) => state - 1);
  };

  useEffect(() => {
    if (onChange) {
      onChange(number);
    }
  }, [onChange, number]);

  useMemo(() => {
    const isPropNumberTypeNumber = typeof propNumber === 'number';
    if (isPropNumberTypeNumber) {
      setNumber(propNumber);
    }
  }, [propNumber]);

  return (
    <Root>
      <Text>{number}</Text>
      <Button onClick={decreaseNumber} isDisabled={isNumberLessThanMin}>
        - Decrease
      </Button>
      <Button onClick={increaseNumber} isDisabled={isNumberMoreThanMax}>
        + Increase
      </Button>
    </Root>
  );
}
