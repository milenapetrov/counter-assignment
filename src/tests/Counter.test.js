// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Check if the initial count is rendered as 0
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Click the + button
  const incrementButton = screen.getByText("+");
  userEvent.click(incrementButton);

  // Check if the count is updated to 1
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  //Click - button
  const decrementButton = screen.getByText("-");
  userEvent.click(decrementButton);

  //Check if counter updates
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("-1");
});
