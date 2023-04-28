import { useSelector } from 'react-redux';
import { formsListSelector } from 'redux/forms/selectors';

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
  const formsList = useSelector(formsListSelector);

  return (
    <Root>
      <MainTopMenu />
      <FormWrapper>
        {formsList.map((formItem) => (
          <FormBoxItem
            key={formItem.id}
            id={formItem.id}
            title={formItem.title}
            date={formItem.opened_at}
            thumbnail={formItem.thumbnail}
          />
        ))}
      </FormWrapper>
    </Root>
  );
}
