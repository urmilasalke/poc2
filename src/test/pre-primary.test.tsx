import Admission from "../components/Admission";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
describe("header", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  test("renders header component", () => {
    //   store = mockStore(initialState);
    //   render(
    //     <Provider store={store}>
    //       <Admission />
    //     </Provider>
    //   );
  });
});
