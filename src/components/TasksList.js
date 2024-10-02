import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../redux/actions/taskActions';

const TasksList = () => {
  const [task, setTask] = useState('');
  const tasks = useSelector((state) => state.tasksList.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
