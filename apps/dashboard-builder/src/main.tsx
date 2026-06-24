import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { DashboardUiProvider } from '@dashboard-builder-nx/ui';
import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <DashboardUiProvider>
      <App/>
    </DashboardUiProvider>
  </StrictMode>
);