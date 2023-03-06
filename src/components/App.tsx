import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import styled from 'styled-components';

import PageTemplate from 'components/templates/PageTemplates';

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
              <PageTemplate
                importFunc={() => import('components/pages/MainPage')}
              />
            }
          />
          <Route
            path='/example'
            element={
              <PageTemplate
                importFunc={() => import('components/pages/ExamplePage')}
              />
            }
          />
          <Route
            path='/example/:exampleId'
            element={
              <PageTemplate
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
