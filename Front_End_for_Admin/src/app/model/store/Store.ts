import { focusReducer, modelsReducer } from '@/entities/element';
import { authReducer, userReducer } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    models: modelsReducer,
    focus: focusReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;