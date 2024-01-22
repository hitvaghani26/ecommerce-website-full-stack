import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUserdata: null,
        isAuthenticated: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.currentUserdata = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.currentUserdata = null;
            state.isAuthenticated = false;
        }
    }

})
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;