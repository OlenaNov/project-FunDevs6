import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://back-end-yourpet.onrender.com';
// 'https://cors.iamnd.eu.org/?url=https://back-end-yourpet.onrender.com';

export const getAllAnimal = createAsyncThunk(
  'notices/fetchNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/notices`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
