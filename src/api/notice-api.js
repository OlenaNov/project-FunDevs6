import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://back-end-yourpet.onrender.com';

export const getAllAnimal = createAsyncThunk(
  'notices/fetchNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/pets`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
