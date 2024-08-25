import { focusReducer, modelsReducer, selectFocus, selectModels } from '@/entities/element';
import { servicesReducer, selectUserServices } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    models: modelsReducer,
    focus: focusReducer,
    userServices: servicesReducer,
  },
});

export const selectors = {
  models: selectModels,
  focus: selectFocus,
  userServices: selectUserServices,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;