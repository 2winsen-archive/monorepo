import React from 'react';
import { render, screen } from '@testing-library/react';
import Rfq from './Rfq';

test('renders Rfq', () => {
  render(<Rfq />);
  const linkElement = screen.getByText(/Rfq/i);
  expect(linkElement).toBeInTheDocument();
});
