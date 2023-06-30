import { render, screen } from '@testing-library/react';
import Button from './Button';

const mockData = {
  title: 'This is a title',
  text: 'This is a subtitle',
};

describe('Testing Button', () => {
  it('should render Image card', () => {
    render(<Button children={mockData.title} />);

    const buttonItem = screen.getByText(mockData.title);
    expect(buttonItem).toBeInTheDocument();
  });
});
