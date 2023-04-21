import { useDispatch, useSelector } from 'react-redux';
import { setGlobalLeftMenuIsVisibleAction } from 'redux/global/actions';
import { globalLeftMenuSelector } from 'redux/global/selectors';

import useOnOutsideClick from 'hooks/useOnOutsideClick';

import styled from 'styled-components';

import HomescreenMenuItem from 'components/molecules/items/HomescreenMenuItem';
import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';

const Root = styled.div<{ isVisible: boolean }>`
  z-index: 101;
  position: fixed;
  top: 0;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  max-height: 100%;
  background-color: ${(props) => props.theme.palette.white};
  box-shadow: #00000047 0 0 16px;
  transform: ${(props) =>
    props.isVisible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const LogoWrapper = styled.div`
  padding: 10px 0 8px 24px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 64px;
`;

const LogoButton = styled(Button)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;

const LogoText = styled.p`
  color: ${(props) => props.theme.palette.gray750};
  font-size: 1.375rem;
  font-weight: 400;
`;

const Divider = styled.div`
  margin: 12px 0;
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
`;

export default function HomescreenMenu(): JSX.Element {
  const dispatch = useDispatch();

  const { isVisible } = useSelector(globalLeftMenuSelector);

  const outside = useOnOutsideClick({
    isActive: isVisible,
    onClick: () => {
      dispatch(
        setGlobalLeftMenuIsVisibleAction({
          isVisible: false,
        }),
      );
    },
  });

  return (
    <Root ref={outside} isVisible={isVisible}>
      <LogoWrapper>
        <LogoButton to='/'>
          <Icon name='GoogleLogo' width={74} />
          <LogoText>설문지</LogoText>
        </LogoButton>
      </LogoWrapper>
      <Divider />
      <HomescreenMenuItem iconName='GoogDocs' label='문서' />
      <HomescreenMenuItem iconName='GoogSheets' label='스프레드시트' />
      <HomescreenMenuItem iconName='GoogSlides' label='프레젠테이션' />
      <HomescreenMenuItem iconName='GoogForms' label='설문지' />
      <Divider />
      <HomescreenMenuItem iconName='Gear' label='설정' />
      <HomescreenMenuItem iconName='Help' label='고객센터' />
      <Divider />
      <HomescreenMenuItem iconName='GoogDrive' label='드라이브' />
      <Divider />
    </Root>
  );
}
