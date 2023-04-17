import styled from 'styled-components';

import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

import * as Type from './index.type';

const Root = styled(Button)`
  margin-right: 8px;
  border-radius: 0 20px 20px 0;
  padding-left: 24px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  column-gap: 16px;
  width: calc(100% - 8px);
  height: 40px;
  background-color: transparent;
  transition: background-color ease-in-out 200ms;

  &:hover {
    background-color: #f1f3f4;
  }
`;

const StyledIcon = styled(Icon)`
  color: #555555;
`;

const Label = styled.p`
  color: #555555;
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 400;
`;

export default function HomescreenMenuItem({
  iconName,
  label,
  onClick,
}: Type.HomescreenMenuItemType): JSX.Element {
  return (
    <Root onClick={onClick} isDisabled={!onClick}>
      <StyledIcon name={iconName} width={24} />
      <Label>{label}</Label>
    </Root>
  );
}
