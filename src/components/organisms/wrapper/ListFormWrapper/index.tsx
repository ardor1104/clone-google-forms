import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash-es';

import useOnWindowScroll from 'hooks/useOnWindowScroll';
import getRemainingTime from 'utils/getRemainingTime';

import { useDispatch, useSelector } from 'react-redux';
import { setFormsListViewTitleAction } from 'redux/forms/actions';
import {
  formsSortSelector,
  formsListSelector,
  formsListViewTitleSelector,
} from 'redux/forms/selectors';

import styled from 'styled-components';

import { BODY_HEADER_HEIGHT } from 'components/organisms/headers/BodyHeader';
import { MAIN_TOP_MENU_HEIGHT } from 'components/organisms/menu/MainTopMenu';
import FormListItem from 'components/molecules/items/FormListItem';

const Root = styled.div`
  margin: ${`-${MAIN_TOP_MENU_HEIGHT}px`} auto 0;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  max-width: 1150px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 920px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 690px;
  }
`;

const FormList = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  padding: 20px 0 20px 16px;
  font-size: ${(props) => props.theme.sizes.font.lg};
`;

const ItemWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export default function ListFormWrapper(): JSX.Element {
  const dispatch = useDispatch();

  const weekFormListRef = useRef<null | HTMLDivElement>(null);
  const etcFormListRef = useRef<null | HTMLDivElement>(null);

  const formsSort = useSelector(formsSortSelector);
  const formsList = useSelector(formsListSelector);
  const formsListViewTitle = useSelector(formsListViewTitleSelector);

  useOnWindowScroll(
    debounce(() => {
      const titleHiddenByTopMenuHeight =
        BODY_HEADER_HEIGHT + MAIN_TOP_MENU_HEIGHT / 2;

      if (
        (etcFormListRef.current?.getBoundingClientRect().top ?? 0) <=
        titleHiddenByTopMenuHeight
      ) {
        dispatch(setFormsListViewTitleAction({ listViewTitle: 'before' }));
      } else if (
        (weekFormListRef.current?.getBoundingClientRect().top ?? 0) <=
        titleHiddenByTopMenuHeight
      ) {
        dispatch(setFormsListViewTitleAction({ listViewTitle: 'week' }));
      } else {
        dispatch(setFormsListViewTitleAction({ listViewTitle: 'today' }));
      }
    }, 100),
  );

  const [todayFormLastIndex, setTodayFormLastIndex] = useState<number>(-1);
  const [weekFormLastIndex, setWeekFormLastIndex] = useState<number>(-1);

  useEffect(() => {
    let isFormsListViewTitleChanged = false;

    if (
      formsList.every((formItem, i) => {
        const formItemElapsedTime = getRemainingTime({
          startTime:
            formsSort === 'lastOpened'
              ? formItem.opened_at
              : formItem.updated_at,
          endTime: new Date(),
        });

        if (
          formsListViewTitle === null &&
          !isFormsListViewTitleChanged &&
          i > 0
        ) {
          dispatch(setFormsListViewTitleAction({ listViewTitle: 'today' }));
          isFormsListViewTitleChanged = true;
        }

        if (formsList.length - 1 === i) {
          setTodayFormLastIndex(i);

          return false;
        } else if (
          formItemElapsedTime.days !== 0 ||
          formItemElapsedTime.hours > new Date().getHours()
        ) {
          setTodayFormLastIndex(i - 1);

          return false;
        }

        return true;
      })
    ) {
      setTodayFormLastIndex(-1);
    }

    if (
      formsList.every((formItem, i) => {
        const formItemElapsedTime = getRemainingTime({
          startTime:
            formsSort === 'lastOpened'
              ? formItem.opened_at
              : formItem.updated_at,
          endTime: new Date(),
        });

        if (
          formsListViewTitle === null &&
          !isFormsListViewTitleChanged &&
          i > 0
        ) {
          dispatch(setFormsListViewTitleAction({ listViewTitle: 'week' }));
          isFormsListViewTitleChanged = true;
        }

        if (formsList.length - 1 === i) {
          setWeekFormLastIndex(i);

          return false;
        } else if (formItemElapsedTime.days >= 7) {
          setWeekFormLastIndex(i - 1);

          return false;
        }

        return true;
      })
    ) {
      setWeekFormLastIndex(-1);
    }

    if (formsListViewTitle === null && !isFormsListViewTitleChanged) {
      dispatch(setFormsListViewTitleAction({ listViewTitle: 'before' }));
    }
  }, [formsList, formsSort]);

  return (
    <Root>
      {todayFormLastIndex !== -1 ? (
        <FormList>
          <TitleWrapper>오늘</TitleWrapper>
          <ItemWrapper>
            {formsList.slice(0, todayFormLastIndex + 1).map((formItem) => (
              <FormListItem
                key={formItem.id}
                id={formItem.id}
                title={formItem.title}
                date={
                  formsSort === 'lastOpened'
                    ? formItem.opened_at
                    : formItem.updated_at
                }
                ownerName={formItem.ownerName}
              />
            ))}
          </ItemWrapper>
        </FormList>
      ) : null}
      {weekFormLastIndex !== -1 && todayFormLastIndex !== weekFormLastIndex ? (
        <FormList ref={weekFormListRef}>
          <TitleWrapper>이전 7일</TitleWrapper>
          <ItemWrapper>
            {formsList
              .slice(todayFormLastIndex + 1, weekFormLastIndex + 1)
              .map((formItem) => (
                <FormListItem
                  key={formItem.id}
                  id={formItem.id}
                  title={formItem.title}
                  date={
                    formsSort === 'lastOpened'
                      ? formItem.opened_at
                      : formItem.updated_at
                  }
                  ownerName={formItem.ownerName}
                />
              ))}
          </ItemWrapper>
        </FormList>
      ) : null}
      {weekFormLastIndex !== formsList.length - 1 ? (
        <FormList ref={etcFormListRef}>
          <TitleWrapper>이전</TitleWrapper>
          <ItemWrapper>
            {formsList.slice(weekFormLastIndex + 1).map((formItem) => (
              <FormListItem
                key={formItem.id}
                id={formItem.id}
                title={formItem.title}
                date={
                  formsSort === 'lastOpened'
                    ? formItem.opened_at
                    : formItem.updated_at
                }
                ownerName={formItem.ownerName}
              />
            ))}
          </ItemWrapper>
        </FormList>
      ) : null}
    </Root>
  );
}
