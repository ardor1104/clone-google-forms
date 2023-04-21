import styled from 'styled-components';

import MainTopMenu from 'components/organisms/menu/MainTopMenu';

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export default function MainPage(): JSX.Element {
  return (
    <Root>
      <MainTopMenu />
      MainPage
    </Root>
  );
}
