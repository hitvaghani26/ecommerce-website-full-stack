import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    totalItems: 0,
  },
  reducers: {
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setTotalItems } = wishlistSlice.actions;
export default wishlistSlice.reducer;
