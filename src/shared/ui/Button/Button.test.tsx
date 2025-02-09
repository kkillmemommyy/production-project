import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('test render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
