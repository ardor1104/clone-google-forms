import styled from 'styled-components';

import Button from 'components/atoms/Button';

const HEADER_HEIGHT = 64;

const HeaderSpace = styled.div`
  width: 100%;
  height: ${`${HEADER_HEIGHT}px`};
`;

const Root = styled(HeaderSpace)`
  z-index: 100;
  padding: 8px;
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
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
`;

export default function BodyHeader(): JSX.Element {
  return (
    <>
      <Root as='header'>
        <MenuWrapper>
          <Button kind='text' to='/'>
            MainPage
          </Button>
          <Button kind='text' to='/example'>
            ExamplePage
          </Button>
        </MenuWrapper>
      </Root>
      <HeaderSpace />
    </>
  );
}
