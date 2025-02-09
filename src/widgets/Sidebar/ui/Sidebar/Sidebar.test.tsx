import { fireEvent, screen } from '@testing-library/react';
import { renderWithTrnslation } from 'shared/lib/tests/renderWithTrnslation/renderWithTrnslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTrnslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test collapse', () => {
    renderWithTrnslation(<Sidebar />);
    const collapsBtn = screen.getByTestId('sidebar-collapse');
    fireEvent.click(collapsBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
