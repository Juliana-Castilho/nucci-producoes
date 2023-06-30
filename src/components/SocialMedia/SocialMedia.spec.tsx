import { render, screen } from '@testing-library/react';
import SocialMedia from './SocialMedia';

describe('Testing SocialMedia', () => {
  it('should render Instagram icon', () => {
    render(<SocialMedia />);
    expect(screen.getByRole('img', { name: 'Instagram' })).toBeInTheDocument();
  });

  it('should render Facebook icon', () => {
    render(<SocialMedia />);
    expect(screen.getByRole('img', { name: 'Facebook' })).toBeInTheDocument();
  });

  it('should render YouTube icon', () => {
    render(<SocialMedia />);
    expect(screen.getByRole('img', { name: 'YouTube' })).toBeInTheDocument();
  });
});
