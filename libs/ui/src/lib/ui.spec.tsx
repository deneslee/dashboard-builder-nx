import { render } from '@testing-library/react';

import DashboardBuilderNxUi from './ui';

describe('DashboardBuilderNxUi', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardBuilderNxUi />);
    expect(baseElement).toBeTruthy();
  });
  
});
