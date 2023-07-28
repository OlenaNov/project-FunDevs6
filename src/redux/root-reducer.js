import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import noticesReducer from './notices/notices-slice';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'isLogin'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedNoticesReducer = persistReducer(
  authPersistConfig,
  noticesReducer
);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notices: persistedNoticesReducer,
});
