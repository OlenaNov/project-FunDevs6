import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth-slice';
import { newsReducer } from './news/news-slice';
import { friendsReducer } from './friends/friends-slice';
import { petsReducer } from './pets/pets-slice';

import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const friendsPersistConfig = {
  key: 'friends',
  storage,
  whitelist: ['friends'],
};

const petsPersistConfig = {
  key: 'pets',
  storage,
  whitelist: ['token'],
};

const persistedFriendsReducer = persistReducer(
  friendsPersistConfig,
  friendsReducer
);
const persistedPetsReducer = persistReducer(petsPersistConfig, petsReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    friends: persistedFriendsReducer,
    news: newsReducer,
    pets: persistedPetsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
