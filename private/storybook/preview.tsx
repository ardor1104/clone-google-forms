import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import theme from '../../src/theme';
import GlobalStyle from '../../src/components/GlobalStyle';

addDecorator((story) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </BrowserRouter>
));
