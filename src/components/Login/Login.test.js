import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Login } from './Login';

describe('<Login />', () => {
  test('it should mount', () => {
    render(<Login />);

    const container = screen.getByTestId('Login');

    expect(container).toBeInTheDocument();
  });
});