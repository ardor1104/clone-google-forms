/* eslint-disable react/no-unused-prop-types, react/no-unstable-nested-components */
import useOnWindowScroll from 'hooks/useOnWindowScroll';

import { useDispatch, useSelector } from 'react-redux';
import {
  switchFormsViewTypeAction,
  setFormsFilterAction,
  setFormsSortAction,
} from 'redux/forms/actions';
import {
  formsViewTypeSelector,
  formsFilterSelector,
  formsSortSelector,
} from 'redux/forms/selectors';
import { StateType as FormsStateType } from 'redux/forms/index.type';

import styled from 'styled-components';

import { BODY_HEADER_HEIGHT } from 'components/organisms/headers/BodyHeader';
import MainTopMenuPopover from 'components/molecules/popovers/MainTopMenuPopover';
import IconButton from 'components/molecules/buttons/IconButton';
import Icon from 'components/atoms/Icon';

const MAIN_TOP_MENU_HEIGHT = 64;

const MainTopMenuSpace = styled.div`
  width: 100%;
  height: ${`${MAIN_TOP_MENU_HEIGHT}px`};
`;

const Root = styled(MainTopMenuSpace)<{ isScrolled: boolean }>`
  z-index: 1;
  padding-top: 2px;
  position: fixed;
  top: ${`${BODY_HEADER_HEIGHT}px`};
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.menu.mainTopMenu.bgColor};
  box-shadow: ${(props) =>
    props.isScrolled ? '0 2px 5px 2px #3c404326' : undefined};
  user-select: none;
`;

const ContentsWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 1150px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 920px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 690px;
  }
`;

const ListSortType = styled.p`
  margin-right: 30px;
  color: #202124;
  font-size: ${(props) => props.theme.sizes.font.lg};
`;

const MainTopMenuPopoverWrapper = styled.div`
  margin-right: 60px;
  padding-right: 24px;
  display: inline-flex;
  justify-content: flex-end;
  flex: 1;
`;

const FilterButton = styled.div<{ isVisible: boolean }>`
  border-radius: 4px;
  padding: 0 5px 0 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.isVisible ? '#f3e8fd' : undefined)};

  &:hover {
    background-color: #f1f3f4;
  }

  > p {
    color: #414549;
    font-size: ${(props) => props.theme.sizes.font.md};
  }

  > span {
    color: #414549;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0 24px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

export default function MainTopMenu(): JSX.Element {
  const dispatch = useDispatch();

  const formsViewType = useSelector(formsViewTypeSelector);
  const formsFilter = useSelector(formsFilterSelector);
  const formsSort = useSelector(formsSortSelector);

  const { windowTop } = useOnWindowScroll();

  const filterItems: Array<{ id: FormsStateType['filter']; label: string }> = [
    {
      id: 'all',
      label: '모든 항목',
    },
    {
      id: 'own',
      label: '내가 소유한 항목',
    },
    {
      id: 'notOwned',
      label: '내가 소유하지 않은 항목',
    },
  ];

  const sortItems: Array<{ id: FormsStateType['sort']; label: string }> = [
    {
      id: 'lastOpened',
      label: '내가 마지막으로 열어본 항목',
    },
    {
      id: 'lastEdit',
      label: '내가 마지막으로 수정한 날짜',
    },
    {
      id: 'lastModifiedDate',
      label: '최종 수정 날짜',
    },
    {
      id: 'ascending',
      label: '제목',
    },
  ];

  const onFilterButtonClick = (id: any): void => {
    dispatch(setFormsFilterAction({ filter: id }));
  };

  const onSortButtonClick = (id: any): void => {
    dispatch(setFormsSortAction({ sort: id }));
  };

  return (
    <>
      <Root isScrolled={windowTop > 0}>
        <ContentsWrapper>
          <ListSortType>최근 설문지</ListSortType>
          <MainTopMenuPopoverWrapper>
            <MainTopMenuPopover
              Button={({ menuVisible }: { menuVisible: boolean }) => (
                <FilterButton isVisible={menuVisible}>
                  <p>모든 항목</p>
                  <Icon name='DownArrow' width={24} />
                </FilterButton>
              )}
              items={filterItems}
              selectedId={formsFilter}
              onMenuClick={onFilterButtonClick}
            />
          </MainTopMenuPopoverWrapper>
          <ButtonWrapper>
            <IconButton
              iconName={
                formsViewType === 'listView' ? 'ListView' : 'GoBoardView'
              }
              onClick={() => dispatch(switchFormsViewTypeAction())}
            />
            <MainTopMenuPopover
              Button={() => <IconButton iconName='SortOptions' />}
              items={sortItems}
              selectedId={formsSort}
              onMenuClick={onSortButtonClick}
            />
            <IconButton iconName='File' isDisabled />
          </ButtonWrapper>
        </ContentsWrapper>
      </Root>
      <MainTopMenuSpace />
    </>
  );
}
