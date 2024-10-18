import { focusReducer, selectFocus, } from '@/entities/element';
import { counterReducer } from '@/entities/element/model/slice/counter/slice';
import { virtualPostReducer } from '@/entities/element/model/slice/virtualPost/slice';
import { snapshotSliceReducer } from '@/entities/postPreview/model/slice/snapshot/slice';
import { backupsReducer } from '@/entities/postState/model/slice/backups/slice';
import { openedPostReducer } from '@/entities/postState/model/slice/openedPost/slice';
import { postsReducer } from '@/entities/postState/model/slice/posts/slice';
import { servicesReducer, selectUserServices } from '@/entities/user';
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

const rootReducer = combineReducers({
  focus: focusReducer,
  counter: counterReducer,
  userServices: servicesReducer,
  virtualPost: virtualPostReducer,
  snapshot: snapshotSliceReducer,
  scrollRestoration: scrollRestorationReducer,
  userPosts: postsReducer,
  openedPost: openedPostReducer,
  backups: backupsReducer,
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

export const selectors = {
  focus: selectFocus,
  userServices: selectUserServices,
}

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;