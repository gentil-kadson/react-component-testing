import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./counter";

test("should render the component", () => {
  render(<Counter initialCount={0} />);
  const incrementButton = screen.getByText("Increment");

  expect(incrementButton.textContent).toBe("Increment");
});

test("clicking the increment button should add +1", () => {
  render(<Counter initialCount={0} />);

  const incrementButton = screen.getByText("Increment");

  fireEvent.click(incrementButton);

  const countValue = screen.getByRole("paragraph");

  expect(countValue.textContent).toBe("1");
});
