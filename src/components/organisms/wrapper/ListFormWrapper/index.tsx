import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash-es';

import useOnWindowScroll from 'hooks/useOnWindowScroll';
import getRemainingTime from 'utils/getRemainingTime';

import { useDispatch, useSelector } from 'react-redux';
import { setGlobalMainPageListViewTitleAction } from 'reducers/global/actions';
import { formsSortSelector } from 'reducers/forms/selectors';

import styled from 'styled-components';

import { BODY_HEADER_HEIGHT } from 'components/organisms/headers/BodyHeader';
import { MAIN_TOP_MENU_HEIGHT } from 'components/organisms/menu/MainTopMenu';
import FormListItem from 'components/molecules/items/FormListItem';

import * as Type from './index.type';

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
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

export default function ListFormWrapper({
  formsList,
}: Type.ListFormWrapperType): JSX.Element {
  const dispatch = useDispatch();

  const weekFormListRef = useRef<null | HTMLDivElement>(null);
  const monthFormListRef = useRef<null | HTMLDivElement>(null);
  const etcFormListRef = useRef<null | HTMLDivElement>(null);

  const formsSort = useSelector(formsSortSelector);

  useOnWindowScroll(
    debounce(() => {
      if (isElementUnderTopMenu(etcFormListRef.current)) {
        dispatch(
          setGlobalMainPageListViewTitleAction({ listViewTitle: 'before' }),
        );
      } else if (isElementUnderTopMenu(monthFormListRef.current)) {
        dispatch(
          setGlobalMainPageListViewTitleAction({ listViewTitle: 'month' }),
        );
      } else if (isElementUnderTopMenu(weekFormListRef.current)) {
        dispatch(
          setGlobalMainPageListViewTitleAction({ listViewTitle: 'week' }),
        );
      } else {
        dispatch(
          setGlobalMainPageListViewTitleAction({ listViewTitle: 'today' }),
        );
      }
    }, 100),
  );

  const [todayFormLastIndex, setTodayFormLastIndex] = useState<number>(-1);
  const [weekFormLastIndex, setWeekFormLastIndex] = useState<number>(-1);
  const [monthFormLastIndex, setMonthFormLastIndex] = useState<number>(-1);

  const isElementUnderTopMenu = (element: null | HTMLDivElement): boolean => {
    const titleHiddenByTopMenuHeight =
      BODY_HEADER_HEIGHT + MAIN_TOP_MENU_HEIGHT / 2;

    return (
      !!element &&
      element?.getBoundingClientRect().top <= titleHiddenByTopMenuHeight
    );
  };

  useEffect(() => {
    if (formsList) {
      let todayIndex = -1;
      let weekIndex = -1;
      let monthIndex = -1;

      formsList.some((formItem, i) => {
        const formItemElapsedTime = getRemainingTime({
          startTime:
            formsSort === 'lastOpened'
              ? formItem.opened_at
              : formItem.updated_at,
          endTime: new Date(),
        });

        if (formItemElapsedTime.days === 0) {
          todayIndex = i;
        } else if (formItemElapsedTime.days < 7) {
          weekIndex = i;
        } else if (formItemElapsedTime.days < 30) {
          monthIndex = i;
        } else {
          return true;
        }

        return false;
      });

      setTodayFormLastIndex(todayIndex);
      setWeekFormLastIndex(weekIndex);
      setMonthFormLastIndex(monthIndex);
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
                owner={formItem.owner}
                isShowDateAsTime
              />
            ))}
          </ItemWrapper>
        </FormList>
      ) : null}
      {weekFormLastIndex !== -1 ? (
        <FormList ref={weekFormListRef}>
          <TitleWrapper>이전 7일</TitleWrapper>
          <ItemWrapper>
            {formsList
              ?.slice(todayFormLastIndex + 1, weekFormLastIndex + 1)
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
                  owner={formItem.owner}
                />
              ))}
          </ItemWrapper>
        </FormList>
      ) : null}
      {monthFormLastIndex !== -1 ? (
        <FormList ref={monthFormListRef}>
          <TitleWrapper>이전 30일</TitleWrapper>
          <ItemWrapper>
            {formsList
              ?.slice(weekFormLastIndex + 1, monthFormLastIndex + 1)
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
                  owner={formItem.owner}
                />
              ))}
          </ItemWrapper>
        </FormList>
      ) : null}
      {monthFormLastIndex !== (formsList.length ?? 0) - 1 ? (
        <FormList ref={etcFormListRef}>
          <TitleWrapper>이전</TitleWrapper>
          <ItemWrapper>
            {formsList.slice(monthFormLastIndex + 1).map((formItem) => (
              <FormListItem
                key={formItem.id}
                id={formItem.id}
                title={formItem.title}
                date={
                  formsSort === 'lastOpened'
                    ? formItem.opened_at
                    : formItem.updated_at
                }
                owner={formItem.owner}
              />
            ))}
          </ItemWrapper>
        </FormList>
      ) : null}
    </Root>
  );
}
