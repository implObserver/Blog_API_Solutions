import { modelsActions, modelsReducer, focusReducer, selectModels } from '@/entities/element/index';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    models: modelsReducer,
    focus: focusReducer,
  },
});

export const actions = {
  elementsActions: modelsActions,
}

export const selectors = {
  selectModels,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;