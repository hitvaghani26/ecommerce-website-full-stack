import { createSlice } from '@reduxjs/toolkit';

const cartslice = createSlice({
  name: 'cart',
  initialState: {
    totalItems: 0,
  },
  reducers: {
    setCartTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setCartTotalItems } = cartslice.actions;
export default cartslice.reducer;
