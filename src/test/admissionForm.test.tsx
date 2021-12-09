import AdmissionForm from "../components/AdmissionForm";
import { render, act, fireEvent, screen } from "@testing-library/react";
import axios from "axios";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");

describe("home", () => {
  test("renders home component", () => {
    render(<AdmissionForm />);
  });
});

test("axios post request for reset  password then", async () => {
  const reset = {
    firstName: "urmila",
    middleName: "santosh",
    lastName: "salke",
    admforstandard: "V",
    standardpass: "IV",
    result: 85,
    email: "urmilasalke@gmail.com",
    city: "Parner",
    district: "Ahmadnagar",
    state: "Maharashtra",
    zip: 414306,
  };

  mockedAxios.post.mockImplementationOnce(() =>
    Promise.resolve({ data: reset })
  );
  const { getByTestId } = render(<AdmissionForm />);
  fireEvent.change(getByTestId("firstName"), {
    target: { value: "urmila" },
  });
  fireEvent.change(getByTestId("middleName"), {
    target: { value: "santosh" },
  });

  fireEvent.change(getByTestId("lastName"), {
    target: { value: "salke" },
  });

  fireEvent.change(getByTestId("admforstandard"), {
    target: { value: "urmila" },
  });

  fireEvent.change(getByTestId("standardpass"), {
    target: { value: "IV" },
  });

  fireEvent.change(getByTestId("result"), {
    target: { value: "85" },
  });
  fireEvent.change(getByTestId("dob"), {
    target: { value: "20" },
  });
  fireEvent.change(getByTestId("email"), {
    target: { value: "urmilasalke@gmail.com" },
  });
  fireEvent.change(getByTestId("district"), {
    target: { value: "Ahmadnagar" },
  });
  fireEvent.change(getByTestId("city"), {
    target: { value: "Parner" },
  });
  fireEvent.change(getByTestId("state"), {
    target: { value: "Maharashtra" },
  });
  fireEvent.change(getByTestId("zip"), {
    target: { value: "414306" },
  });
  await act(async () => {
    fireEvent.click(screen.getByTestId("submit", { name: "Submit" }));
  });
  expect(mockedAxios.post).toHaveBeenCalled();
});
