import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bye there link', () => {
  render(<App />);
  const linkElement = screen.getByText(/bye there/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders bye there link', () => {
  render(<App />);
  const linkElement = screen.getByText(/bye there/i);
  expect(linkElement).toBeInTheDocument();
});