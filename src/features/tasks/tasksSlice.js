import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },

        toggleTaskDone: ({ tasks }, { payload: id }) => {
            const task = tasks.find(task => task.id === id);
            task.done = !task.done;
        },

        removeTask: (state, { payload: id }) => {
            state.tasks = state.tasks.filter(task => task.id !== id);
        },

        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },

        setAllDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        }
    },
});

export const {
    addTask,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    setAllDone,
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;

export default tasksSlice.reducer;
