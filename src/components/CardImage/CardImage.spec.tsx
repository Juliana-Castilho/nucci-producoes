import { render, screen } from '@testing-library/react';
import CardImage from './CardImage';

describe('Testing CardImage', () => {
  it('should render Image card', () => {
    render(
      <CardImage
        src="/card/img_portfolio1.jpg"
        alt="Portfólio"
        width={0}
        height={0}
      />
    );
    expect(
      screen.getAllByRole('img', { name: 'Portfólio' })[0]
    ).toBeInTheDocument();
  });
});
