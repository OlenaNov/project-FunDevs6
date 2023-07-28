import { createSlice } from '@reduxjs/toolkit';
import { getAllAnimal } from './notices-operations';

const initialState = {
  animals: [],
  loading: false,
  error: null,
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllAnimal.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAnimal.fulfilled, (state, action) => {
        state.loading = false;
        state.animals = action.payload;
      })
      .addCase(getAllAnimal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default noticeSlice.reducer;
