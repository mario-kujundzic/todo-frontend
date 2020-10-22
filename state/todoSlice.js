import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        reset: state => {
            state.value = [];
        }
    }
})

export const { set, reset } = todoSlice.actions;

export const selectTodos = state => state.todos.value;

export default todoSlice.reducer;