import { useEffect, useState } from 'react';

import styled from 'styled-components';

import FormItemPopover from 'components/molecules/popovers/FormItemPopover';
import Icon from 'components/atoms/Icon';

import * as Type from './index.type';

const Root = styled.a`
  border: 1px solid #dfe1e5;
  border-radius: 3px;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border: 1px solid #8430ce;
  }
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 170px;
  background-image: linear-gradient(top, #00000000, #00000005);
  overflow: hidden;

  > img {
    width: 100%;
  }
`;

const ContentsWrapper = styled.div`
  border-top: 1px solid #e2e2e2;
  padding: 16px 8px 14px 16px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h6`
  width: 100%;
  color: #414549;
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ContentsBottomWrapper = styled.div`
  padding-right: 30px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  column-gap: 7px;
`;

const GoogleFormIcon = styled(Icon)`
  color: #8430ce;
`;

const LastDate = styled.p`
  color: #80868b;
  font-size: ${(props) => props.theme.sizes.font.sm};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default function FormBoxItem({
  id,
  title,
  lastDate,
}: Type.FormBoxItemType): JSX.Element {
  const [isItToday, setIsItToday] = useState<boolean>(false);

  useEffect(() => {
    const today = new Date();
    const todayTime = today.getTime();

    const lastDateTime = new Date(lastDate).getTime();

    const timeGap = Math.floor((todayTime - lastDateTime) / (60 * 60 * 1000));

    if (
      timeGap <= today.getHours() &&
      new Date(lastDateTime).getHours() <= today.getHours()
    ) {
      setIsItToday(true);
    } else {
      setIsItToday(false);
    }
  }, [lastDate]);

  return (
    <Root>
      <ThumbnailWrapper>
        <img
          src='https://i.pinimg.com/originals/d0/b7/2c/d0b72c0f7022546b01e13d545f0e66fc.jpg'
          alt='FormThumbnail'
        />
      </ThumbnailWrapper>
      <ContentsWrapper>
        <Title>{title}</Title>
        <ContentsBottomWrapper>
          <GoogleFormIcon name='GoogleForm' width={24} />
          <LastDate>
            {isItToday
              ? new Date(lastDate)
                  .toLocaleTimeString()
                  .slice(
                    0,
                    new Date(lastDate).toLocaleTimeString().lastIndexOf(':'),
                  )
              : new Date(lastDate).toLocaleDateString()}
          </LastDate>
        </ContentsBottomWrapper>
        <FormItemPopover id={id} />
      </ContentsWrapper>
    </Root>
  );
}
