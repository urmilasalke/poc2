import Aboutus from "../components/Aboutus";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
describe("home", () => {
  test("renders home component", () => {
    render(
      <BrowserRouter>
        <Aboutus />
      </BrowserRouter>
    );
  });
});

test("check div component", () => {
  render(
    <BrowserRouter>
      <Aboutus />
    </BrowserRouter>
  );
  const homediv = screen.getByTestId("home-text");
  fireEvent.click(homediv);
  const visiontext = screen.getByTestId("vision-text");
  fireEvent.click(visiontext);
});
