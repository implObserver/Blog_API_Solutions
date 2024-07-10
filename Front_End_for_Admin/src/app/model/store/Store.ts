import { elementsReducer } from '@/widgets/elementsContainer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    elements: elementsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export default store;