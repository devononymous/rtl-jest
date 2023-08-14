import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list-items of this file', () => {
  render(<App />);

  const listItems = screen.getAllByRole("listitem");
  // expect(listItems).toHaveLength(3);
  // or
  // expect(listItems.length).toBe(3)
  // or
  expect(listItems.length).toEqual(3)

});

test('renders title', () => {
  render(<App />);

  const title = screen.getByTestId("mytestid")
  expect(title).toBeInTheDocument()

});


test('sum to equal', () => {
  render(<App />);

  const sum = screen.getByTitle("sum")
  expect(sum.textContent).toEqual("6")

});
