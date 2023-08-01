import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './friends-operation';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFriends.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.loading = false;
      state.friends = action.payload;
    });
    builder.addCase(getFriends.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const friendsReducer = friendsSlice.reducer; // Убедитесь, что есть этот экспорт
export default friendsSlice;
