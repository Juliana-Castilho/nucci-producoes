import { render, screen } from '@testing-library/react';
import Header from './Header';
import Logo from '../Logo/Logo';
import SocialMedia from '../SocialMedia/SocialMedia';
import Navbar from '../Navbar/Navbar';

describe('Testing Header', () => {
  it('should render Header with Logo', () => {
    render(<Header />);
    expect(render(<Logo />));
    expect(render(<SocialMedia />));
    expect(render(<Navbar />));
  });

  it('should render Header with SocialMedia', () => {
    render(<Header />);
    expect(render(<SocialMedia />));
  });

  it('should render Header with Navbar', () => {
    render(<Header />);
    expect(render(<Navbar />));
  });
});
