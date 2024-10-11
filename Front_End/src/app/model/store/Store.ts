import { commentsReducer } from '@/entities/commentsShowcase/model/slice/comments/slice';
import { tagReducer } from '@/entities/tag';
import { postsReducer, servicesReducer } from '@/entities/user';
import { scrollRestorationReducer } from '@/features/scrollRestoration';
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
  userServices: servicesReducer,
  scrollRestoration: scrollRestorationReducer,
  posts: postsReducer,
  tag: tagReducer,
  comments: commentsReducer,
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

}

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;