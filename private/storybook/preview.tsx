import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@transverse/evo-ui';

import { setupStore } from '../../src/store';
import theme from '../../src/theme';
import GlobalStyle from '../../src/components/GlobalStyle';

addDecorator((story) => (
  <Provider store={setupStore()}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        {story()}
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
));
