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
        },
        updateTodo: (state, action) => {
            const newState = state.value.map(todo => {
                if (todo.id === action.payload.id)
                    return action.payload;
                return todo;
            })
            state.value = newState;
        }
    }
})

export const { set, reset, removeTodo, updateTodo } = todoSlice.actions;

export const selectTodos = state => state.todos.value;

export const selectTodo = (state, id) => state.todos.value.find(todo => todo.id == id);

export default todoSlice.reducer;