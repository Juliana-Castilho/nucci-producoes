import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Testing Logo', () => {
  it('should render Logo 1', () => {
    render(<Logo />);
    expect(
      screen.getAllByRole('img', { name: 'Nucci Produções' })[0]
    ).toBeInTheDocument();
  });

  it('should render Logo 2', () => {
    render(<Logo />);
    expect(
      screen.getAllByRole('img', { name: 'Nucci Produções' })[1]
    ).toBeInTheDocument();
  });
});
