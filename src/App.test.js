import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});




test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list-items of this file', () => {
  const listItems = screen.getAllByRole("listitem");
  // expect(listItems).toHaveLength(3);
  // or
  // expect(listItems.length).toBe(3)
  // or
  expect(listItems.length).toEqual(3)

});

test('renders title', () => {
  const title = screen.getByTestId("mytestid")
  expect(title).toBeInTheDocument()

});


test('sum to equal', () => {
  const sum = screen.getByTitle("sum")
  expect(sum.textContent).toEqual("6")

});
