import Header from "../components/Header";
import { render, act, fireEvent, screen } from "@testing-library/react";
describe("header", () => {
  test("renders header component", () => {
    render(<Header />);
  });
});

test("Click event on about us ", () => {
  const { getByTestId } = render(<Header />);
  fireEvent.click(getByTestId("aboutus"));
});
