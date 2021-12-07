import Aboutus from "../components/Aboutus";
import { fireEvent, render, screen } from "@testing-library/react";
describe("home", () => {
  test("renders home component", () => {
    render(<Aboutus />);
  });
});

test("check div component", () => {
  render(<Aboutus />);
  const homediv = screen.getByTestId("home-text");
  fireEvent.click(homediv);
  const visiontext = screen.getByTestId("vision-text");
  fireEvent.click(visiontext);
});
