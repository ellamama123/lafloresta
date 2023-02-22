import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers';

const persistConfig = {
  key: 'la-floresta-cart',
  storage,
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// TODO: add redux-persist for cart state
const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const stateSelector = (state: RootState) => state;

export default store;
