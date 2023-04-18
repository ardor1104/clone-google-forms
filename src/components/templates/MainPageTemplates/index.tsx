import loadable from 'utils/loadable';

import styled from 'styled-components';

import MainHeader from 'components/organisms/headers/MainHeader';
import HomescreenMenu from 'components/organisms/menu/HomescreenMenu';

const Root = styled.section`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export default function MainPageTemplates({
  importFunc,
}: {
  importFunc: () => any;
}): JSX.Element {
  const PageContents = loadable(importFunc);

  return (
    <Root>
      <MainHeader />
      <HomescreenMenu />
      <PageContents />
    </Root>
  );
}
