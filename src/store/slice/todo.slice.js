import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: 1, title: "Purchase clothes", completed: false }];

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
