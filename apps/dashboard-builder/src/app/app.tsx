// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from "./nx-welcome";
import { useDashboardStore } from '../store/dashboardStore';
import { useUiStorage } from '../hooks/useUiStorage';
import { DatadogDatasource } from '@dashboard-builder-nx/datasources';
import { DashboardBuilderNxUi } from '@dashboard-builder-nx/ui';

export function App() {
  const store = useDashboardStore();
  const storage = useUiStorage();
  const ds = new DatadogDatasource();

  return (
    <div>
      <DashboardBuilderNxUi />
      <NxWelcome title="@dashboard-builder-nx/dashboard-builder"/>
    </div>
  );
}


