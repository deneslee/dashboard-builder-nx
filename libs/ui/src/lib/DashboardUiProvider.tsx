import { MantineProvider } from '@mantine/core';
import { dashboardTheme } from './theme';
import '@mantine/core/styles.css';
import './global.css';

export interface DashboardUiProviderProps {
  children: React.ReactNode;
}

export function DashboardUiProvider({ children }: DashboardUiProviderProps) {
  return (
    <MantineProvider theme={dashboardTheme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}
