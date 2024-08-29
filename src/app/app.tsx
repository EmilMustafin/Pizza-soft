import './styles/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppLoader } from './app-loader';
import { AppRouter } from './router';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppLoader>
        <AppRouter />
      </AppLoader>
    </Provider>
  </StrictMode>,
);
