import React from 'react';
import { render, screen } from '@testing-library/react';
import Shell from './Shell';

test('renders Shell', () => {
  render(<Shell />);
  const linkElement = screen.getByText(/Shell/i);
  expect(linkElement).toBeInTheDocument();
});
