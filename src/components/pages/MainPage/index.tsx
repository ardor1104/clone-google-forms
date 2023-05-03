import { useSelector } from 'react-redux';
import { formsViewTypeSelector } from 'redux/forms/selectors';

import styled from 'styled-components';

import MainTopMenu from 'components/organisms/menu/MainTopMenu';
import ListFormWrapper from 'components/organisms/wrapper/ListFormWrapper';
import GoBoardFormWrapper from 'components/organisms/wrapper/GoBoardFormWrapper';

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export default function MainPage(): JSX.Element {
  const formsViewType = useSelector(formsViewTypeSelector);

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
