import { render, screen } from '@testing-library/react';
import Error from './';

it('renders Error component', () => {
  render(<Error error="Error component" />);
  const linkElement = screen.getByText(/Error component/i);
  expect(linkElement).toBeInTheDocument();
});
