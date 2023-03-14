import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const Root = styled.div``;

export default function ExampleDetailPage(): JSX.Element {
  const { exampleId } = useParams();

  return (
    <Root>
      ExampleDetailPage
      {`[${exampleId}]`}
    </Root>
  );
}
