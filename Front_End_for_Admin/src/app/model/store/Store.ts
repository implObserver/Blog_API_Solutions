import { modelsActions, modelsReducer, focusReducer, selectModels } from '@/entities/element/index';
import { configureStore } from '@reduxjs/toolkit';
import { authActions, authReducer } from '../slice/slice';

export const store = configureStore({
  reducer: {
    models: modelsReducer,
    focus: focusReducer,
    auth: authReducer,
  },
});

export const actions = {
  modelsActions,
  authActions,
}

export const selectors = {
  selectModels,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;