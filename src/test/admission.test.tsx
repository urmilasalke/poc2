import Admission from "../components/Admission";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
// import axios from "axios";
// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("header", () => {
//   test("renders header component", () => {
//     render(
//       <BrowserRouter>
//         <Admission />
//       </BrowserRouter>
//     );
//   });
// });

test("check onclick event on div component", () => {
  const initialState = {
    student: {
      value: [],
    },
  };
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);
  // mockedAxios.get.mockResolvedValue({ data: {} });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Admission />
      </BrowserRouter>
    </Provider>
  );
  // expect(mockedAxios.get).toHaveBeenCalled();
  // const homediv = screen.getByTestId("student-text");
  // fireEvent.click(homediv);
  // const visiontext = screen.getByTestId("teacher-text");
  // fireEvent.click(visiontext);
});

// test("student login form", () => {
//   const initialState = {
//     student: {
//       value: [],
//     },
//   };
//   const mockStore = configureStore();
//   let store;
//   store = mockStore(initialState);
//   mockedAxios.get.mockResolvedValue({ data: {} });
//   const { getByTestId } = render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Admission />
//       </BrowserRouter>
//     </Provider>
//   );
// const homediv = screen.getByTestId("student-text");
// fireEvent.click(homediv);

// fireEvent.change(getByTestId("email"), {
//   target: { value: "urmilasalke@gmail.com" },
// });
// fireEvent.change(getByTestId("password"), {
//   target: { value: "Urmila@123" },
// });
// fireEvent.click(screen.getByTestId("submit", { name: "submit" }));
// expect(mockedAxios.get).toHaveBeenCalled();
// const data = {
//   name: "urmila",
//   email: "mongo",
//   class: "mongo atlas",
//   section: "mongo db",
//   bloodGroup: "A +ve",
//   gender: "female",
// };
// localStorage.setItem(Storage, JSON.stringify(data));
// });

// test("teacher login form", () => {
//   const initialState = {
//     student: {
//       value: [],
//     },
//   };
//   const mockStore = configureStore();
//   let store;
//   store = mockStore(initialState);
//   mockedAxios.get.mockResolvedValue({ data: {} });
//   const { getByTestId } = render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Admission />
//       </BrowserRouter>
//     </Provider>
//   );
//   const visiontext = screen.getByTestId("teacher-text");
//   fireEvent.click(visiontext);

//   fireEvent.change(getByTestId("temail"), {
//     target: { value: "urmilasalke@gmail.com" },
//   });
//   fireEvent.change(getByTestId("tpassword"), {
//     target: { value: "Urmila@123" },
//   });
//   fireEvent.click(screen.getByTestId("tsubmit", { name: "submit" }));
//   // expect(mockedAxios.get).toHaveBeenCalled();
// });
