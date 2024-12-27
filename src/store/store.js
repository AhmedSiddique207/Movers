import { configureStore } from '@reduxjs/toolkit';
import { api } from './Apis/CricketPlayerApi.js';
import LoginSignupReducer from './LoginSignupSlice';

export const store = configureStore({
  reducer: {
    auth: LoginSignupReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
