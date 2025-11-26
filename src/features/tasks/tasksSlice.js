import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "../../tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
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
            tasks.forEach(task => (task.done = true));
        },

        fetchExampleTasks: (state) => {
            state.loading = true;
        },

        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.loading = false;
            state.tasks = tasks;
        },

        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    }
});

export const {
    addTask,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasks = state => state.tasks.tasks;

export const selectHideDone = state => state.tasks.hideDone;

export const selectIsTaskListEmpty = state =>
    state.tasks.tasks.length === 0;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase())
    );
};

export default tasksSlice.reducer;
