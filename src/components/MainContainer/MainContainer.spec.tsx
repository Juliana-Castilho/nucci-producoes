import { render, screen } from '@testing-library/react';
import MainContainer from './MainContainer';

const mockData = {
  title: 'This is a title',
  text: 'This is a subtitle',
};

describe('Testing MainContainer', () => {
  it('should render MainContainer', () => {
    render(<MainContainer children={mockData.text} />);

    const mainContainerItem = screen.getByText(mockData.text);
    expect(mainContainerItem).toBeInTheDocument();
  });
});
