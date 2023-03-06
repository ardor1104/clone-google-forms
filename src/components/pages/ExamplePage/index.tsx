import styled from 'styled-components';

import Button from 'components/atoms/Button';

const Root = styled.div``;

export default function ExamplePage(): JSX.Element {
  return (
    <Root>
      ExamplePage
      <Button to='/example/1'>Go To Example Page 1</Button>
    </Root>
  );
}
