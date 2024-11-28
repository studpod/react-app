
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial counter value', () => {
    render(<Counter />);
    const counterText = screen.getByText(/Counter: 0/i);
    expect(counterText).toBeInTheDocument();
  });

  test('increments counter value on button click', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);

    fireEvent.click(incrementButton);

    const updatedCounterText = screen.getByText(/Counter: 1/i);
    expect(updatedCounterText).toBeInTheDocument();
  });

  test('resets counter value on reset button click', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    const resetButton = screen.getByText(/Reset/i);

    // Збільшуємо значення
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const incrementedCounterText = screen.getByText(/Counter: 2/i);
    expect(incrementedCounterText).toBeInTheDocument();

    // Скидаємо значення
    fireEvent.click(resetButton);

    const resetCounterText = screen.getByText(/Counter: 0/i);
    expect(resetCounterText).toBeInTheDocument();
  });
});

