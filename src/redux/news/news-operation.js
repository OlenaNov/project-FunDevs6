import instance from 'api/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSearchParamsNews } from 'utils/createSearchParamsNews';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/news?page=${page}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewsByQuery2 = createAsyncThunk(
  'news/fetchNewsByQuery2',
  async (params, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `/news/search?${createSearchParamsNews(params)}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
