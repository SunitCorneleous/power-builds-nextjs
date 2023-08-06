import { configureStore } from '@reduxjs/toolkit';
import pcBuilderSlice from './features/pcBuilderSlice';

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderSlice,
  },
});
