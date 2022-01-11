import { configureStore } from "@reduxjs/toolkit";
import { signinReducer } from "../slices/loginSlice";
import { myshopReducer } from "../slices/shopSlice";

export const store = configureStore({
  reducer: {
    signin: signinReducer,
    myshop: myshopReducer,
  },
});
