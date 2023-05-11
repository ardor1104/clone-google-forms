import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFormsAction, setFormsListAction } from 'redux/forms/actions';
import {
  formsViewTypeSelector,
  formsFilterSelector,
  formsSortSelector,
  formsKeywordSelector,
} from 'redux/forms/selectors';

import styled from 'styled-components';

import MainTopMenu from 'components/organisms/menu/MainTopMenu';
import ListFormWrapper from 'components/organisms/wrapper/ListFormWrapper';
import GoBoardFormWrapper from 'components/organisms/wrapper/GoBoardFormWrapper';

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export default function MainPage(): JSX.Element {
  const dispatch = useDispatch();

  const formsViewType = useSelector(formsViewTypeSelector);
  const formsFilter = useSelector(formsFilterSelector);
  const formsSort = useSelector(formsSortSelector);
  const formsKeyword = useSelector(formsKeywordSelector);

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
      {formsViewType === 'listView' ? (
        <ListFormWrapper />
      ) : (
        <GoBoardFormWrapper />
      )}
    </Root>
  );
}
