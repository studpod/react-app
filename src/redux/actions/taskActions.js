let nextTaskId = 0;

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: { id: nextTaskId++, text: task },
});

export const removeTask = (id) => ({
  type: 'REMOVE_TASK',
  payload: id,
});
