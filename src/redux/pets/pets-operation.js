import instance from 'api/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`/pets`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const url = `/pets/${petId}`;
      const { data } = await instance.delete(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getPets = createAsyncThunk(
//   'pets/fetchPets',
//   async (token, thunkAPI) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const { data } = await axios.get(`/api/pets`, config);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
