import { useState, useRef, ChangeEvent } from 'react';

import styled from 'styled-components';

import IconButton from 'components/molecules/buttons/IconButton';

import * as Type from './index.type';

const Root = styled.div<Type.RootPropsType>`
  border: 1px solid transparent;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  max-width: 720px;
  background-color: ${(props) =>
    props.isFocused ? props.theme.palette.white : '#f1f3f4'};
  box-shadow: ${(props) =>
    props.isFocused
      ? '0 1px 1px 0 #4145494c, 0 1px 3px 1px #41454926'
      : undefined};
  transition: background-color ease-in-out 100ms;
`;

const Input = styled.input`
  border: none;
  flex: 1 1 100%;
  font-size: ${(props) => props.theme.sizes.font.lg};
  background-color: transparent;
  outline: none;
`;

export default function MainHeaderSearchBox({
  value,
  onChange,
}: Type.MainHeaderSearchBoxType) {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isInputValueExist = value !== '' && value;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };

  const onInputFocus = (): void => {
    setIsFocused(true);
  };

  const onInputBlur = (): void => {
    setIsFocused(false);
  };

  const doResetValue = (): void => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <Root isFocused={isFocused}>
      <IconButton
        overrides={{
          Root: {
            css: `
              margin: 3px 8px;
            `,
          },
        }}
        iconName='Search'
      />
      <Input
        ref={inputRef}
        value={value}
        placeholder='검색'
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      <IconButton
        overrides={{
          Root: {
            css: `
              margin: 3px 8px;
              opacity: ${isInputValueExist ? '1' : '0'};
              transition: opacity 250ms ease-out;
            `,
          },
        }}
        iconName='Close'
        onClick={doResetValue}
      />
    </Root>
  );
}
