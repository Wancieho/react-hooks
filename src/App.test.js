import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('it should mount', () => {
    render(<App />);

    const container = screen.getByTestId('App');

    expect(container).toBeInTheDocument();
  });
});