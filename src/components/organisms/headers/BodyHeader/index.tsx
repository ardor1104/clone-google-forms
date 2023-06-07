import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleGlobalLeftMenuIsVisibleAction } from 'reducers/global/actions';
import { setFormsKeywordAction } from 'reducers/forms/actions';
import { meInfoSelector } from 'reducers/me/selectors';

import styled from 'styled-components';

import IconButton from 'components/molecules/buttons/IconButton';
import BodyHeaderSearchBox from 'components/molecules/inputs/BodyHeaderSearchBox';
import Icon from 'components/atoms/Icon';

export const BODY_HEADER_HEIGHT = 64;

const HeaderSpace = styled.div`
  width: 100%;
  height: ${`${BODY_HEADER_HEIGHT}px`};
`;

const Root = styled(HeaderSpace)`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.headers.bodyHeader.bgColor};
  transition: all ease-in-out 200ms;
`;

const MenuWrapper = styled.div`
  padding: 8px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SideMenuWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-width: 191px;
`;

const LeftSideMenuWrapper = styled(SideMenuWrapper)`
  padding-right: 30px;
`;

const PageLogoWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;

const LogoText = styled.div`
  color: ${(props) => props.theme.palette.gray750};
  font-size: 1.375rem;
  white-space: nowrap;
`;

const SearchWrapper = styled.div`
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 100%;
`;

const RightSideMenuWrapper = styled(SideMenuWrapper)`
  padding: 0 4px 0 30px;
  justify-content: flex-end;
`;

const ProfileImageWrapper = styled.div`
  margin: 4px 2px 4px 6px;
  border-radius: ${(props) => props.theme.sizes.radius.max};
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  transition: background-color ease-in-out 200ms;
  cursor: not-allowed;

  &:hover {
    background-color: #3c404314;
  }
`;

const ProfileImage = styled.img`
  border-radius: ${(props) => props.theme.sizes.radius.max};
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default function BodyHeader(): JSX.Element {
  const dispatch = useDispatch();

  const meInfo = useSelector(meInfoSelector);

  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const onBodyHeaderSearchEvent = (): void => {
    const keyword = searchKeyword;

    dispatch(setFormsKeywordAction({ keyword }));
  };

  return (
    <>
      <Root as='header'>
        <MenuWrapper>
          <LeftSideMenuWrapper>
            <IconButton
              iconName='DefaultMenu'
              size={48}
              padding={12}
              onClick={() => dispatch(toggleGlobalLeftMenuIsVisibleAction())}
              overrides={{
                Root: {
                  css: `
                    margin: 0 4px;
                  `,
                },
              }}
            />
            <PageLogoWrapper>
              <Icon name='GoogForms' width={40} />
              <LogoText>설문지</LogoText>
            </PageLogoWrapper>
          </LeftSideMenuWrapper>
          <SearchWrapper>
            <BodyHeaderSearchBox
              value={searchKeyword}
              onChange={(value) => setSearchKeyword(value)}
              onSearchEvent={onBodyHeaderSearchEvent}
            />
          </SearchWrapper>
          <RightSideMenuWrapper>
            <IconButton
              overrides={{
                Root: {
                  css: `
                    cursor: not-allowed;
                  `,
                },
              }}
              iconName='AppsMenu'
            />
            <ProfileImageWrapper>
              <ProfileImage src={meInfo?.profile_picture} alt='ProfileImage' />
            </ProfileImageWrapper>
          </RightSideMenuWrapper>
        </MenuWrapper>
      </Root>
      <HeaderSpace />
    </>
  );
}
