import { useState } from 'react';

function TaskForm({ addTask }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (text.trim() === '') {
            return;
        }
        addTask(text);
        setText('');
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='form'>
            <input
            type="text"
            placeholder="Введите задачу"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
        </>
    );
}

export default TaskForm;