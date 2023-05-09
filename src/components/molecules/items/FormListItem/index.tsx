import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { meInfoSelector } from 'redux/me/selectors';

import styled from 'styled-components';

import FormItemPopover from 'components/molecules/popovers/FormItemPopover';
import Icon from 'components/atoms/Icon';

import * as Type from './index.type';

const Root = styled.a`
  border-bottom: 1px solid #e3e3e3;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid transparent;
    border-radius: ${(props) => props.theme.sizes.radius.max};
    background-color: #f3e8fd;
  }

  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;

const GoogleFormIcon = styled(Icon)`
  margin: 12px 14px 12px 16px;
  color: #8430ce;
`;

const Title = styled.h6`
  margin: 0 12px;
  width: 45%;
  color: #202124;
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const OwnersName = styled.p`
  margin-right: 16px;
  flex: 10;
  color: #5f6368;
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const LastDate = styled.p`
  margin-right: 16px;
  flex: 16;
  color: #5f6368;
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 400;
`;

const FormItemPopoverWrapper = styled.div`
  margin: 7px 11px 6px 9px;
  display: inline-flex;
`;

export default function FormListItem({
  id,
  title,
  date,
  owner,
}: Type.FormListItemType): JSX.Element {
  const meInfo = useSelector(meInfoSelector);

  const [isItToday, setIsItToday] = useState<boolean>(false);

  const dateObject: Date = new Date(date);
  const isMyForm: boolean = meInfo?.id === owner.id;

  useEffect(() => {
    const today = new Date();
    const todayTime = today.getTime();

    const lastDateTime = dateObject.getTime();

    const timeGap = Math.floor((todayTime - lastDateTime) / (60 * 60 * 1000));

    if (
      timeGap <= today.getHours() &&
      dateObject.getHours() <= today.getHours()
    ) {
      setIsItToday(true);
    } else {
      setIsItToday(false);
    }
  }, [date]);

  return (
    <Root>
      <GoogleFormIcon name='GoogleForm' width={24} />
      <Title>{title}</Title>
      <OwnersName>{isMyForm ? '나' : owner.name}</OwnersName>
      <LastDate>
        {isItToday
          ? dateObject
              .toLocaleTimeString()
              .slice(0, dateObject.toLocaleTimeString().lastIndexOf(':'))
          : dateObject.toLocaleDateString()}
      </LastDate>
      <FormItemPopoverWrapper>
        <FormItemPopover
          formsId={id}
          formsTitle={title}
          buttonSize={36}
          buttonPadding={6}
        />
      </FormItemPopoverWrapper>
    </Root>
  );
}
