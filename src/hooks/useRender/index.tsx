import { BrowserRouter } from 'react-router-dom';

import renderWithProviders from 'utils/renderWithProviders';

import { ChildrenPropType } from 'components/globalType';
import ThemeTemplate from 'components/templates/ThemeTemplate';

const useRender = (children: ChildrenPropType) => {
  return renderWithProviders(
    <BrowserRouter>
      <ThemeTemplate>{children}</ThemeTemplate>
    </BrowserRouter>,
  );
};

export default useRender;
