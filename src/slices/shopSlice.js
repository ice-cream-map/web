import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopId: null,
};

export const shopSlice = createSlice({
  name: "myshop",
  initialState,
  reducers: {
    setShopId(state, payload) {
      state.shopId = payload.payload;
    },
  },
  extraReducers: {},
});

export const selectMyShop = (state) => state.myshop;

export const { setShopId } = shopSlice.actions;

export const myshopReducer = shopSlice.reducer;
