import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/example'

export const store = configureStore({
  reducer: {
    // TODO: Add reducers...
    counter: counterReducer,
  },
});