import React from 'react';
import { useParams } from 'react-router-dom';
import Todo from './Todo';

const TodoList = ({ tasks, onToggleCompleted }) => {
  const { filter } = useParams();
  let filteredTasks;

  switch (filter) {
    case 'completed':
      filteredTasks = tasks.filter(task => task.completed);
      break;
    default:
      filteredTasks = tasks;
  }

  if (filteredTasks.length === 0) {
    return (
      <>
        <h1 className='m-3'>Liste de tâches</h1>
        <ul className='list-group m-3'>
          <li className='list-group-item'>Aucune tâche à afficher</li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <h1 className='m-3'>Liste de tâches</h1>
        <ul className='list-group m-3'>
          {filteredTasks.map((task) => (
            <Todo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />
          ))}
        </ul>
      </>
    );
  }
};

export default TodoList;
