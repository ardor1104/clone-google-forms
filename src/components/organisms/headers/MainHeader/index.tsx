import { useDispatch } from 'react-redux';
import { toggleGlobalLeftMenuIsVisibleAction } from 'redux/global/actions';

import styled from 'styled-components';

import IconButton from 'components/molecules/buttons/IconButton';

const HEADER_HEIGHT = 64;

const HeaderSpace = styled.div`
  width: 100%;
  height: ${`${HEADER_HEIGHT}px`};
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
  background-color: ${(props) => props.theme.colors.headers.bodyHeader};
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

export default function MainHeader(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <>
      <Root as='header'>
        <MenuWrapper>
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
        </MenuWrapper>
      </Root>
      <HeaderSpace />
    </>
  );
}
