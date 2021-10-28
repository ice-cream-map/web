import { configureStore } from "@reduxjs/toolkit";
import { signinReducer } from "../slices/loginSlice";

export const store = configureStore({
  reducer: {
    signin: signinReducer,
  },
});
