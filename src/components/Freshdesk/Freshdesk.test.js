import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Freshdesk from './Freshdesk';

describe('<Freshdesk />', () => {
  test('it should mount', () => {
    render(<Freshdesk />);
    
    const freshdesk = screen.getByTestId('Freshdesk');

    expect(freshdesk).toBeInTheDocument();
  });
});