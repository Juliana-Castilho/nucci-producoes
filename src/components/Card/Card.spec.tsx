import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockData = {
  title: 'This is a title',
  text: 'This is a subtitle',
};

describe('Testing Card', () => {
  it('should render the Card', () => {
    render(<Card children={mockData.title} />);

    const cardImageItem = screen.getByText(mockData.title);
    expect(cardImageItem).toBeInTheDocument();
  });
});
