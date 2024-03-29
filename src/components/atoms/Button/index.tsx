import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { ButtonPropsType } from './index.type';

const styles = css<Pick<ButtonPropsType, 'kind' | 'size' | 'isDisabled'>>`
  border-radius: ${(props) => props.theme.sizes.radius.sm};
  padding: ${(props) =>
    props.kind !== 'underline' && props.kind !== 'text' && props.kind !== 'none'
      ? props.size === 'lg'
        ? '16px 40px'
        : props.size === 'md'
        ? '9px 24px 11px 24px'
        : '6px 8px'
      : null};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  font-size: ${(props) =>
    props.size === 'lg'
      ? props.theme.sizes.font.xl
      : props.size === 'md'
      ? props.theme.sizes.font.md
      : props.theme.sizes.font.sm};
  line-height: ${(props) =>
    props.kind !== 'none'
      ? props.size === 'lg'
        ? props.theme.sizes.font.xl
        : props.size === 'md'
        ? props.theme.sizes.font.md
        : props.theme.sizes.font.sm
      : null};
  transition: all ease-in-out 200ms;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};

  ${(props) => {
    return {
      primary: `
        min-width: 85px;
        color: ${props.theme.palette.white};
        background-color: ${
          props.isDisabled ? props.theme.palette.gray300 : '#4d90fe'
        };
      `,
      mono: `
        border: 1px solid ${
          props.isDisabled ? props.theme.palette.gray300 : '#dadce0'
        };
        min-width: 85px;
        color: ${props.isDisabled ? props.theme.palette.gray300 : '#8430ce'};
        background-color: transparent;
      `,
      underline: `
        color: ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.black
        };
        text-decoration: ${props.isDisabled ? '' : 'underline'};
        text-underline-position: under;
      `,
      text: `
        color: ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.black
        };
      `,
      dangerous: `
        color: ${props.theme.palette.white};
        background-color: ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.red
        };
      `,
      none: null,
    }[props.kind ?? 'mono'];
  }}

  &:hover {
    ${(props) =>
      !props.isDisabled
        ? {
            primary: `
              background-color: #357ae8;
            `,
            mono: `
              border: 1px solid #cce0fc;
              color: #333333;
              background-color: #f8fbff;
            `,
            underline: `
              color: ${props.theme.palette.primary3};
            `,
            text: `
              color: ${props.theme.palette.primary3};
            `,
            dangerous: null,
            none: null,
          }[props.kind ?? 'mono']
        : null}
  }
`;

const StyledLink = styled(({ href, isDisabled, ...props }) => (
  <Link {...props} />
))`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const StyledButton = styled.button`
  ${styles}
`;

export default function Button({
  children,
  kind = 'none',
  size = 'md',
  onClick,
  disabledOnClick,
  ...props
}: ButtonPropsType): JSX.Element {
  const { to, isDisabled } = props;
  const isAnchor: boolean = kind === 'underline' || kind === 'text';

  const onButtonClick = (): void => {
    const isDisabledOnClickExist = !!disabledOnClick;
    const isOnclickExist = !!onClick;

    if (isDisabled && isDisabledOnClickExist) {
      disabledOnClick();
    } else if (!isDisabled && isOnclickExist) {
      onClick();
    }
  };

  return to ? (
    <StyledLink
      role='button'
      onClick={onButtonClick}
      kind={kind}
      size={size}
      {...props}
    >
      {children}
    </StyledLink>
  ) : isAnchor ? (
    <Anchor
      role='button'
      onClick={onButtonClick}
      kind={kind}
      size={size}
      {...props}
    >
      {children}
    </Anchor>
  ) : (
    <StyledButton
      role='button'
      onClick={onButtonClick}
      kind={kind}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
