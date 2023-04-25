import styled from 'styled-components';

import MainTopMenu from 'components/organisms/menu/MainTopMenu';
import FormBoxItem from 'components/molecules/items/FormBoxItem';

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  width: 1150px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 920px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 690px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function MainPage(): JSX.Element {
  return (
    <Root>
      <MainTopMenu />
      <FormWrapper>
        {Array(30)
          .fill(undefined)
          .map((_, i) => (
            <FormBoxItem
              key={i}
              id=''
              title='제목 없는 설문지'
              lastDate={new Date('2023-04-25 00:00:01').toUTCString()}
            />
          ))}
      </FormWrapper>
    </Root>
  );
}
