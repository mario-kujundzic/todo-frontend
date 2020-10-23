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
        },
        removeTodo: (state, action) => {
            const newState = state.value.filter(todo => {
                return todo.id != action.payload;
            })
            state.value = newState;
        }
    }
})

export const { set, reset, removeTodo } = todoSlice.actions;

export const selectTodos = state => state.todos.value;

export default todoSlice.reducer;