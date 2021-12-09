import PrePrimary from "../components/PrePrimary";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Preprimary", () => {
  const initialState = {
    admission: {
      value: [],
    },
  };
  const mockStore = configureStore();
  let store;

  test("renders axios then Preprimary component", () => {
    store = mockStore(initialState);
    mockedAxios.get.mockResolvedValue({ data: {} });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PrePrimary />
        </BrowserRouter>
      </Provider>
    );
    expect(mockedAxios.get).toHaveBeenCalled();
  });
  test("renders axios catch Preprimary component", () => {
    store = mockStore(initialState);
    mockedAxios.get.mockRejectedValue({ data: {} });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PrePrimary />
        </BrowserRouter>
      </Provider>
    );
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});

// test("renders header component", () => {
//   store = mockStore(initialState);
//   render(
//     <Provider store={store}>
//       <PrePrimary />
//     </Provider>
//   );
// });

// describe("Preprimary", () => {
//   const initialState = {
//     admission: {
//       value: [],
//     },
//   };
//   const mockStore = configureStore();
//   let store;
//   test("renders Preprimary component", () => {
//     store = mockStore(initialState);
//     render(
//       <Provider store={store}>
//         <PrePrimary />
//       </Provider>
//     );
//   });
// });
