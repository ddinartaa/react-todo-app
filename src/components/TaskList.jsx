import { useState, useEffect } from 'react';
import './TaskList.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
      return response.json();
    })
    .then((data) => {
      setTasks(data);
      setLoading(false);
    })
    .catch(() => {
      setError('Ошибка загрузки данных');
      setLoading(false);
    })
  }, []);

  if (loading) {
    return <p>Загрузка...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.completed ? '✔️' : '✖️'}
        </li>
      ))}
    </ul>
  )
}


export default TaskList;