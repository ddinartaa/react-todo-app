function TaskItem({ task, deleteTask }) {
    return (
        <li className="task-item">
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </li>
    )
}

export default TaskItem;