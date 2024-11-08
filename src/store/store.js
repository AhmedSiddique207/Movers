import { configureStore } from '@reduxjs/toolkit';
import LoginSignupReducer from './LoginSignupSlice';

export const store = configureStore({
  reducer: {
    auth: LoginSignupReducer,
  },
});






