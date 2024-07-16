import { elementsActions, elementsReducer, selectElements } from '@/entities/element/index';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    elements: elementsReducer,
  },
});

export const actions = {
  elementsActions,
}

export const selectors = {
  selectElements,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;