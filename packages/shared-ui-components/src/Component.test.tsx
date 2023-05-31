import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';

test('renders Component', () => {
  render(<Component />);
  const linkElement = screen.getByText(/Shared-ui-components/i);
  expect(linkElement).toBeInTheDocument();
});
