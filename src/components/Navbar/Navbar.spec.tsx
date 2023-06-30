import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Testing Navbar', () => {
  it('should render Toggle menu icon', () => {
    render(<Navbar />);
    expect(
      screen.getByRole('img', { name: 'menu-toggle' })
    ).toBeInTheDocument();
  });

  it('should render Home menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
  });

  it('should render Sobre menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Sobre').closest('a')).toHaveAttribute(
      'href',
      '/sobre'
    );
  });

  it('should render Portfólio menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Portfólio').closest('a')).toHaveAttribute(
      'href',
      '/portfolio'
    );
  });

  it('should render Serviços menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Serviços ▾').closest('a')).toHaveAttribute(
      'href',
      '/#'
    );
  });

  it('should render Gravação menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Gravação').closest('a')).toHaveAttribute(
      'href',
      '/servicos/gravacao'
    );
  });

  it('should render Mixagem menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Mixagem').closest('a')).toHaveAttribute(
      'href',
      '/servicos/mixagem'
    );
  });

  it('should render Masterização menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Masterização').closest('a')).toHaveAttribute(
      'href',
      '/servicos/masterizacao'
    );
  });

  it('should render Produção Musical menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Produção Musical').closest('a')).toHaveAttribute(
      'href',
      '/servicos/producao-musical'
    );
  });

  it('should render Aulas menu', () => {
    render(<Navbar />);
    expect(screen.getByText('Aulas').closest('a')).toHaveAttribute(
      'href',
      '/servicos/aulas'
    );
  });
});
