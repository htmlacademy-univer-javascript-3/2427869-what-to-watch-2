import { configureStore } from '@reduxjs/toolkit';
import { films } from './slices/films.slice';

export const store = configureStore({
  reducer: {
    films,
  },
});
