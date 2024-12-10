import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const LoginSignupSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    deleteAccount: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.accountDeleted = true; 
    },
  },
});

export const { signupSuccess, signupFailure, loginSuccess, loginFailure, logout,deleteAccount } = LoginSignupSlice.actions;
export default LoginSignupSlice.reducer;

