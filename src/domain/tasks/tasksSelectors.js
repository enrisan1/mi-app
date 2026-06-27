export const getAllTasks = (state) => state;

export const getCompletedTasks = (state) => state.filter((t) => t.completed);

export const getPendingTasks = (state) => state.filter((t) => !t.completed);
