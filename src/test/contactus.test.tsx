import Contactus from "../components/Contactus";
import { render, act, fireEvent, screen } from "@testing-library/react";
import axiosMock from "axios";
jest.mock("axios");
describe("header", () => {
  test("renders header component", () => {
    render(<Contactus />);
  });
});

test("axios post request for reset  password then", async () => {
  const reset = {
    firstName: "urmila",
    lastName: "salke",
    email: "urmilasalke@gmail.com",
    message: "good",
  };

  axiosMock.post.mockImplementationOnce(() => Promise.resolve({ data: reset }));
  const { getByTestId } = render(<Contactus />);
  fireEvent.change(getByTestId("firstName"), {
    target: { value: "urmila" },
  });
  fireEvent.change(getByTestId("lastName"), {
    target: { value: "salke" },
  });
  fireEvent.change(getByTestId("email"), {
    target: { value: "urmilasalke@gmail.com" },
  });
  fireEvent.change(getByTestId("message"), {
    target: { value: "good" },
  });
  await act(async () => {
    fireEvent.click(screen.getByTestId("submit", { name: "Submit" }));
  });
  expect(axiosMock.post).toHaveBeenCalled();
});

test("axios post request for reset  password then", async () => {
  const reset = {
    firstName: "urmila",
    lastName: "salke",
    email: "urmilasalke@gmail.com",
    message: "good",
  };

  axiosMock.post.mockImplementationOnce(() => Promise.reject({ data: reset }));
  const { getByTestId } = render(<Contactus />);
  await act(async () => {
    fireEvent.click(screen.getByTestId("submit", { name: "Submit" }));
  });
  expect(axiosMock.post).toHaveBeenCalled();
});
