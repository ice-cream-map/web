import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../utils/auth";

export const checkAuth = createAsyncThunk("signin/checkAuth", async () => {
  if (auth.isAuthenticated()) {
    const token = auth.getToken();
    const roles = auth.getRoles();

    return { token, roles };
  }

  return { token: null, roles: null };
});

export const login = createAsyncThunk("signin/login", auth.login);

export const logout = createAsyncThunk("signin/logout", auth.logout);

const initialState = {
  loading: true,
  error: null,
  loggedIn: false,
  loggedInUser: null,
  token: null,
  roles: null,
};

export const loginSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuth.pending]: startLoading,
    [checkAuth.fulfilled]: (state, { payload }) => {
      const { token = null, roles = null } = payload;

      Object.assign(state, {
        loading: false,
        error: null,
        loggedIn: !!token,
        token,
        roles,
      });
    },
    [checkAuth.rejected]: receiveError,
    [login.pending]: startLoading,
    [login.fulfilled]: (state, { payload }) => {
      const { accessToken, user, roles } = payload;

      Object.assign(state, {
        loading: false,
        loggedIn: true,
        loggedInUser: user,
        token: accessToken,
        roles,
      });
    },
    [login.rejected]: receiveError,
    [logout.pending]: startLoading,
    [logout.fulfilled]: (state) =>
      Object.assign(state, {
        ...initialState,
        loading: false,
      }),
    [logout.rejected]: receiveError,
  },
});

function startLoading(state) {
  Object.assign(state, {
    loading: true,
    error: null,
  });
}

function receiveError(state, action) {
  console.log(action);
  Object.assign(state, {
    loading: false,
    error: action.error,
  });
}

export const selectSignin = (state) => state.signin;

export const signinReducer = loginSlice.reducer;
