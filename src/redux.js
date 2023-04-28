import {configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, text:'Faire le checkpoint de redux', done: true },
        { id: 2, text:'Commencer le chapitre sur les API', done: false },
        { id: 4, text:'Faire mes one to none', done: false }
    ], 
    reducers: {
        addTask: (state, action) => {
            const newTask ={
                id: Date.now(),
                done: false,
                text: action.payload
            }
            state.push(newTask); 
        },
        editTask: (state, action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload.id);
            if (taskIndex !== -1) {
              state[taskIndex] = action.payload;
            }
        },
        toggleTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.done = !task.done;
            }
        },
        deleteTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    }
});

export const { addTask, toggleTask, deleteTask, editTask } = todoSlice.actions;

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer
    }
});