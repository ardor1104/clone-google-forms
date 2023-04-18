import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import styled from 'styled-components';

import MainPageTemplates from 'components/templates/MainPageTemplates';

const Root = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100vw;
  max-width: 100%;
`;

export default function App(): JSX.Element {
  // 중복되는 component의 리렌더링을 방지하기 위해 아래와 같이 PageTemplate을 App에서 사용하는 방식을 택하였습니다.
  return (
    <BrowserRouter>
      <Root>
        <Routes>
          <Route
            path='/'
            element={
              <MainPageTemplates
                importFunc={() => import('components/pages/MainPage')}
              />
            }
          />
          <Route
            path='/example'
            element={
              <MainPageTemplates
                importFunc={() => import('components/pages/ExamplePage')}
              />
            }
          />
          <Route
            path='/example/:exampleId'
            element={
              <MainPageTemplates
                importFunc={() => import('components/pages/ExampleDetailPage')}
              />
            }
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Root>
    </BrowserRouter>
  );
}
