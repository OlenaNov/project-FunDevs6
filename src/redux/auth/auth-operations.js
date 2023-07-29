import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth-api.js';

import { authErrorMessage } from '../../utils/warningMessage';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      authErrorMessage(response);
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      authErrorMessage(response);
      return rejectWithValue(response);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      if (!auth.token) {
        return rejectWithValue(null);
      }
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      authErrorMessage(response);
      return rejectWithValue(null);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/users',
  async (data, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const updatedUser = await api.updateUser(auth.token, data);
      return updatedUser;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/avatars',
  async (data, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const updatedUser = await api.updateAvatar(auth.token, data);
      return updatedUser;
    } catch ({ response }) {
      throw rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const fetchAddToFavorite = createAsyncThunk(
  'user/addFavorite',
  async (id, thunkAPI) => {
    try {
      const result = await api.addToFavorite(id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchDeleteFromFavorite = createAsyncThunk(
  'user/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.deleteFromFavorite(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addPet = createAsyncThunk();
