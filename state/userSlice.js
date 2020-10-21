import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        reset: state => {
            state.value = null;
        }
    }
})

export const { set, reset } = userSlice.actions;

export const selectUser = state => state.user.value;

export default userSlice.reducer;