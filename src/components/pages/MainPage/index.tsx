import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFormsAction, setFormsListAction } from 'reducers/forms/actions';
import {
  formsViewTypeSelector,
  formsFilterSelector,
  formsSortSelector,
  formsKeywordSelector,
  formsListSelector,
} from 'reducers/forms/selectors';

import styled from 'styled-components';

import MainTopMenu from 'components/organisms/menu/MainTopMenu';
import ListFormWrapper from 'components/organisms/wrapper/ListFormWrapper';
import GoBoardFormWrapper from 'components/organisms/wrapper/GoBoardFormWrapper';
import MainPageEmptyFormsMessage from 'components/atoms/etc/MainPageEmptyFormsMessage';

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const FormsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1150px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 920px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 690px;
  }
`;

export default function MainPage(): JSX.Element {
  const dispatch = useDispatch();

  const formsViewType = useSelector(formsViewTypeSelector);
  const formsFilter = useSelector(formsFilterSelector);
  const formsSort = useSelector(formsSortSelector);
  const formsKeyword = useSelector(formsKeywordSelector);
  const formsList = useSelector(formsListSelector);

  useEffect(() => {
    const filter = formsFilter;
    const sort = formsSort;
    const keyword = formsKeyword;

    dispatch(
      getFormsAction({
        filter,
        sort,
        keyword,
        succeedFunc: (data) => {
          dispatch(setFormsListAction({ list: data }));
        },
      }),
    );
  }, [formsFilter, formsSort, formsKeyword]);

  return (
    <Root>
      <MainTopMenu />
      <FormsWrapper>
        {!formsList ? (
          <>로딩중</>
        ) : formsList?.length === 0 ? (
          <MainPageEmptyFormsMessage />
        ) : formsViewType === 'listView' ? (
          <ListFormWrapper formsList={formsList} />
        ) : (
          <GoBoardFormWrapper formsList={formsList} />
        )}
      </FormsWrapper>
    </Root>
  );
}
