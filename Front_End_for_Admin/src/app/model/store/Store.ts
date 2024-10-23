import { servicesReducer } from '@/entities/user';
import { scrollRestorationReducer } from '@/features/scrollRestoration/model/slice/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {
  backupsReducer,
  counterReducer,
  focusReducer,
  openedPostReducer,
  postsReducer,
  virtualPostReducer
} from '@/entities/postState';
import { statusesReducer } from '@/features/notificationDistributor';

const rootReducer = combineReducers({
  focus: focusReducer,
  counter: counterReducer,
  userServices: servicesReducer,
  virtualPost: virtualPostReducer,
  scrollRestoration: scrollRestorationReducer,
  userPosts: postsReducer,
  openedPost: openedPostReducer,
  backups: backupsReducer,
  statuses: statusesReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;