import Admission from "../components/Admission";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("header", () => {
  test("renders header component", () => {
    render(
      <BrowserRouter>
        <Admission />
      </BrowserRouter>
    );
  });
});
