import loadable from 'utils/loadable';

import styled from 'styled-components';

import BodyHeader from 'components/organisms/headers/BodyHeader';

const Root = styled.section`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export default function PageTemplate({
  importFunc,
}: {
  importFunc: () => any;
}): JSX.Element {
  const PageContents = loadable(importFunc);

  return (
    <Root>
      <BodyHeader />
      <PageContents />
    </Root>
  );
}
