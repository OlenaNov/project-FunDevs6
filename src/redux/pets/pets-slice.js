import { createSlice } from '@reduxjs/toolkit';
import { getPets, deletePet } from './pets-operation';

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    pets: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPets.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPets.fulfilled, (state, action) => {
      state.loading = false;
      state.friends = action.payload;
    });
    builder.addCase(getPets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deletePet.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.pets = state.pets.filter(pet => pet.id !== action.payload);
    });
    builder.addCase(deletePet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const petsReducer = petsSlice.reducer;
export const { removePet } = petsSlice.actions;
export default petsSlice;
