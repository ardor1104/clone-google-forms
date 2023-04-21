import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import 'sanitize.css';

import store from 'store';

import { ThemeProvider } from '@transverse/evo-ui';

import GlobalStyle from 'components/GlobalStyle';
import App from 'components/App';
import ErrorBoundary from 'components/pages/ErrorBoundary';
import ThemeTemplate from 'components/templates/ThemeTemplate';

const MOUNT_NODE = document.getElementById('app');

const render = (rootNode: Element) => {
  createRoot(rootNode).render(
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider>
          <ThemeTemplate>
            <App />
            <GlobalStyle />
          </ThemeTemplate>
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>,
  );
};

if (MOUNT_NODE !== null) {
  render(MOUNT_NODE);
}
