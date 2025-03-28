import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import bookingReducer from './slices/bookingSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;