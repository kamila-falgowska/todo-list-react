import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },

        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const task = tasks.find(task => task.id === taskId);
            if (task) {
                task.done = !task.done;
            }

        },

        removeTask: (state, { payload: taskId }) => {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
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

export const selectTasksState = state => state.tasks;

export const selectTasks = state => state.tasks.tasks;
export const selectHideDone = state => state.tasks.hideDone;
export const selectIsTaskListEmpty = state =>
    state.tasks.tasks.length === 0;

export default tasksSlice.reducer;
