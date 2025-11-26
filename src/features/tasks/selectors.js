export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;

export const selectHideDone = state => selectTasksState(state).hideDone;

export const selectIsTaskListEmpty = state => selectTasks(state).length === 0;

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    const normalizedQuery = query.trim().toLowerCase();

    return tasks.filter(({ content }) =>
        content.toLowerCase().includes(normalizedQuery)
    );
};

export const selectTaskById = (state, taskId) =>
    selectTasks(state).find(task => task.id === taskId);
