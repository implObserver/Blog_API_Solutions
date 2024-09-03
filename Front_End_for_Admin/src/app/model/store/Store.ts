import { focusReducer, selectFocus, } from '@/entities/element';
import { counterReducer } from '@/entities/element/model/slice/counter/slice';
import { modlelsOfOpenedPostReducer } from '@/entities/element/model/slice/elementsOfPost/slice';
import { localPostsReducer } from '@/entities/element/model/slice/localPosts/slice';
import { postsReducer } from '@/entities/showcasePosts/model/slice/slice';
import { servicesReducer, selectUserServices } from '@/entities/user';
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
  posts: postsReducer,
  localPosts: localPostsReducer,
  modelsOfOpenedPost: modlelsOfOpenedPostReducer,
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