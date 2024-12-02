import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { act } from 'react';  

jest.useFakeTimers();

test('renders Header component in App', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to User App/i);
  expect(headerElement).toBeInTheDocument();
});

test('loads and displays user data in UserProfile on button click', async () => {
  render(<App />);

  // Перевіряємо, що кнопка доступна
  const button = screen.getByText(/Load User/i);
  expect(button).toBeInTheDocument();

  // Клік по кнопці
  fireEvent.click(button);

  // Обгортаємо таймер у `act`
  await act(async () => {
    jest.runAllTimers();
  });

  // Перевіряємо відображення даних
  const name = screen.getByText(/Name: John Doe/i);
  const email = screen.getByText(/Email: john.doe@example.com/i);
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
