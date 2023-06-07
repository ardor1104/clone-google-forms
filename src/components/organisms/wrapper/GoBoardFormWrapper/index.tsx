import { useSelector } from 'react-redux';
import { formsSortSelector } from 'reducers/forms/selectors';

import styled from 'styled-components';

import FormBoxItem from 'components/molecules/items/FormBoxItem';

import * as Type from './index.type';

const Root = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function GoBoardFormWrapper({
  formsList,
}: Type.GoBoardFormWrapperType): JSX.Element {
  const formsSort = useSelector(formsSortSelector);

  return (
    <Root>
      {formsList.map((formItem) => (
        <FormBoxItem
          key={formItem.id}
          id={formItem.id}
          title={formItem.title}
          date={
            formsSort === 'lastOpened'
              ? formItem.opened_at
              : formItem.updated_at
          }
          thumbnail={formItem.thumbnail}
        />
      ))}
    </Root>
  );
}
