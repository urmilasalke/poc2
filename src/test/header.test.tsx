import Header from "../components/Header";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../components/store/AdmissionStore";
import { render, act, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("header", () => {
  test("renders header component", () => {
    render(<Header />);
  });
});

test("Click event on about us ", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  userEvent.click(await screen.findByTestId("footeraboutus"));
  expect(await screen.findByTestId("aboutschool")).toBeInTheDocument();
});
