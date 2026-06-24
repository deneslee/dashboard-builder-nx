
import { Button } from '@mantine/core';
import GridLayout from 'react-grid-layout';

import styles from './ui.module.css';

export function DashboardBuilderNxUi() {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true }
  ];

  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardBuilderNxUi!</h1>
      <Button>Mantine Button</Button>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a">Grid Item A</div>
      </GridLayout>
    </div>
  );
}



