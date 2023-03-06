import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildrenPropType } from 'components/globalType';
import ThemeTemplate from 'components/templates/ThemeTemplate';

const useRender = (children: ChildrenPropType) => {
  return render(
    <BrowserRouter>
      <ThemeTemplate>{children}</ThemeTemplate>
    </BrowserRouter>,
  );
};

export default useRender;
