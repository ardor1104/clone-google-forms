import styled from 'styled-components';

const Root = styled.div`
  border-radius: 2px;
  width: 100%;
  height: 128px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  box-shadow: 0 1px 3px #0000001a;
`;

const Title = styled.h6`
  color: #222222;
  font-size: ${(props) => props.theme.sizes.font.xl};
  white-space: nowrap;
  font-weight: 400;
`;

const Comment = styled.p`
  color: #5f6368;
  font-size: ${(props) => props.theme.sizes.font.lg};
  white-space: nowrap;
  font-weight: 400;
`;

export default function MainPageEmptyFormsMessage(): JSX.Element {
  return (
    <Root>
      <Title>설문지 없음</Title>
      <Comment>+를 클릭하여 새로운 설문지를 만드세요.</Comment>
    </Root>
  );
}
