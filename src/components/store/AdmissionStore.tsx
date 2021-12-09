import { configureStore } from "@reduxjs/toolkit";
import AdmissionReducer from "../reducers/AdmissionReducer";
// import studentReducer from "../reducers/studentReducer";
export const store = configureStore({
  reducer: {
    admission: AdmissionReducer,
    // student: studentReducer,
  },
});
export type MainState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
