import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import noticesReducer from './notices/notices-slice';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const noticesPersistConfig = {
  key: 'notices',
  storage,
  whitelist: ['notices'],
};

const persistedNoticesReducer = persistReducer(
  noticesPersistConfig,
  noticesReducer
);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notices: persistedNoticesReducer,
});
