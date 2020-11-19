import { render, screen } from '@testing-library/react';
import Loading from './';

it('renders Loading component', () => {
  render(<Loading />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
